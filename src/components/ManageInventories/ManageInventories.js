import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase';
import useProducts from '../../hooks/useProducts';
import PageTitle from '../PageTitle/PageTitle';
import SingleProduct from '../SingleProduct/SingleProduct';

const ManageInventories = () => {
  const [user] = useAuthState(auth);
  const [products] = useProducts();
  return (
    <section className='py-4'>
      <PageTitle title="Manage Inventories"></PageTitle>
      <div className="container">
        <h2 className="text-center mb-4">Products In Warehouse</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)}
        </div>
      </div>
    </section>
  );
};

export default ManageInventories;