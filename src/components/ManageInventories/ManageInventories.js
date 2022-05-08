import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import PageTitle from '../PageTitle/PageTitle';
import SingleProduct from '../SingleProduct/SingleProduct';

const ManageInventories = () => {
  const [products] = useProducts();
  const [stateProducts, setSateProducts] = useState(products);


  //Refesh Product after Delte
  useEffect(() => {
    setSateProducts(products)
  }, [products])

  return (
    <>
      <section className='py-4'>
        <PageTitle title="Manage Inventories"></PageTitle>
        <div className="container">
          <h2 className="text-center mb-4">All Products In Warehouse</h2>
          <div className='mb-3 text-center'><button className="btn bike-btn"> <Link to="/add-items" className='text-white'>Add New Product</Link> </button></div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {stateProducts.map(product => <SingleProduct key={product._id} product={product} refreshProduct={setSateProducts}></SingleProduct>)}
          </div>
        </div>
      </section>
    </>

  );
};

export default ManageInventories;