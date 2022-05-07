import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase';
import Loading from '../Loading/Loading';

const AddItems = () => {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [quantitiy, setQuantity] = useState();
  const [email, setEmail] = useState();
  const [supplier, setSupplier] = useState();
  if (loading) {
    <Loading></Loading>
  }

  // Get Input Value
  const handleName = event => {
    setName(event.target.value)
  }
  const handleImage = event => {
    setImage(event.target.value)
  }
  const handleDescription = event => {
    setDescription(event.target.value)
  }
  const handlePrice = event => {
    setPrice(event.target.value)
  }
  const handleQuantity = event => {
    setQuantity(event.target.value)
  }
  const handleEmail = event => {
    setEmail(event.target.value)
  }
  const handleSupplier = event => {
    setSupplier(event.target.value)
  }
  const data = {
    name: name,
    image: image,
    description: description,
    price: price,
    quantity: quantitiy,
    email: email,
    supplier: supplier,
  }
  console.log(data)
  // Product submit
  const handleAddProduct = event => {
    event.preventDefault();
    const url = `http://localhost:5000/products`
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result)
      })
  }

  return (
    <section style={{ background: '#D2E4FF' }} className='py-5'>
      <div className="container">
        <div className="row">
          <div className="col mx-auto col-lg-8">
            <div style={{ borderRadius: '15px' }} className="p-4 bg-white">
              <h2 className='text-center'>Add New Product</h2>
              <hr></hr>
              <div>
                <form onSubmit={handleAddProduct}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-bold">Name</label>
                    <input type="text" onBlur={handleName} className="form-control shadow-none" id="name" name='name' required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="image" className="form-label fw-bold">Image URL</label>
                    <input type="text" onBlur={handleImage} className="form-control shadow-none" id="image" name='image' required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="desciption" className="form-label fw-bold">Description</label>
                    <textarea className="form-control shadow-none" onBlur={handleDescription} id="description" name="description"></textarea>
                    {/* <input type="text" onBlur={handleDescription} className="form-control shadow-none" id="desciption" name='desciption' required /> */}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="price" className="form-label fw-bold">Price</label>
                    <input type="number" onBlur={handlePrice} className="form-control shadow-none" id="price" name='price' required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="quantitiy" className="form-label fw-bold">Quantity</label>
                    <input type="number" onBlur={handleQuantity} className="form-control shadow-none" id="quantitiy" name='quantitiy' required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-bold">Email</label>
                    <input type="email" onBlur={handleEmail} value={user.email} className="form-control shadow-none" id="email" name='email' required readOnly />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="supplier" className="form-label fw-bold">Supplier</label>
                    <input type="text" onBlur={handleSupplier} className="form-control shadow-none" id="supplier" name='supplier' required />
                  </div>
                  <button type="submit" className="btn w-100 bike-btn">Add Product</button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AddItems;