import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase';
import PageTitle from '../PageTitle/PageTitle';
import SingleProduct from '../SingleProduct/SingleProduct';

const MyItems = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    <loading></loading>
  }
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    fetch(`https://bikewarehouse-heroku.herokuapp.com/myitems/${user.email}`)
      .then(res => res.json())
      .then(data => setMyItems(data));
  }, [user.email]);

  return (
    <>
      <PageTitle title="My Items"></PageTitle>
      <section className='py-4'>
        <div className="container">
          <h2 className="text-center mb-4">My Items</h2>
          <div className='mb-3 text-center'><button className="btn bike-btn"> <Link to="/add-items" className='text-white'>Add New Product</Link> </button></div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {
              myItems.map(product => <SingleProduct key={product._id} product={product} refreshProduct={setMyItems}></SingleProduct>)
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default MyItems;