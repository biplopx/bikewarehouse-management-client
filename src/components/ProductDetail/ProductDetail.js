import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = () => {
  const { productId } = useParams();
  const [detailProduct, setDetailProduct] = useState([]);

  //Input Value 
  const [quantity, setQuantity] = useState(0);

  // Fetch Product Details
  const fetchProductDetail = () => {
    const url = `https://bikewarehouse-heroku.herokuapp.com/inventory/${productId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setDetailProduct(data))
  }

  // Update Quantity
  const updateQuantity = () => {
    const url = `https://bikewarehouse-heroku.herokuapp.com/inventory/quantityupdate/${productId}`
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ newQuantity: quantity })
    })
      .then(res => res.json())
      .then(result => {
        fetchProductDetail()
        toast('Quantity Updated')
      })
  }
  // Delivered Update
  const deliveredProduct = () => {
    const url = `https://bikewarehouse-heroku.herokuapp.com/inventory/delivered/${productId}`
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(result => {
        fetchProductDetail()
        toast('Product Delivered')
      })
  }

  // Refresh Product Details
  useEffect(() => {
    const url = `https://bikewarehouse-heroku.herokuapp.com/inventory/${productId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setDetailProduct(data))
  }, [productId])

  return (
    <section style={{ background: '#D2E4FF' }} className='py-5'>
      <div className="container">
        <div className="row">
          <div className="col mx-auto col-lg-8">
            <div style={{ borderRadius: '15px' }} className="p-4 bg-white">
              <h2 className='text-center'>Product Details</h2>
              <hr></hr>
              <div className='p-3 mb-3'>
                <img src={detailProduct.image} alt="" className='img-fluid img-thumbnail d-block mx-auto' />
              </div>
              <div>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='w-25 fw-bold'>Product ID</td>
                      <td>{detailProduct._id}</td>
                    </tr>
                    <tr>
                      <td className='w-25 fw-bold'>Name</td>
                      <td>{detailProduct.name}</td>
                    </tr>
                    <tr>
                      <td className='w-25 fw-bold'>Price</td>
                      <td>{detailProduct.price}</td>
                    </tr>
                    <tr>
                      <td className='w-25 fw-bold'>Description</td>
                      <td>{detailProduct.description}</td>
                    </tr>
                    <tr>
                      <td className='w-25 fw-bold'>Suppplier</td>
                      <td>{detailProduct.supplier}</td>
                    </tr>
                    <tr>
                      <td className='w-25 fw-bold'>Quantity</td>
                      <td>{detailProduct.quantity}</td>
                    </tr>
                    <tr>
                      <td className='w-25 fw-bold'>Sold</td>
                      <td>{detailProduct.sold ? detailProduct.sold : "No"}</td>
                    </tr>
                  </tbody>
                </table>
                <div className='border p-2'>
                  <h3 className='text-center'>Manage</h3>
                  <div className='d-flex justify-content-center mb-4'>
                    <button onClick={deliveredProduct} className="btn bike-btn me-2">Delivered</button>
                  </div>
                  <div className='d-flex justify-content-center flex-wrap'>
                    <input type="number" onChange={(event) => setQuantity(parseInt(event.target.value))} className="form-control shadow-none w-75 me-4" id="quantity" name='quantity' />
                    <button onClick={updateQuantity} className="btn bike-btn">Add Quantity</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </section>
  );
};

export default ProductDetail;