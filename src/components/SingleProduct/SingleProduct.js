import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const SingleProduct = ({ product, refreshProduct }) => {
  const { _id, name, image, description, price, quantity, supplier } = product;
  const navigate = useNavigate();
  const [products] = useProducts();
  const navigateToProductDetail = id => {
    navigate(`/inventory/${id}`)
  }


  const handleDelete = id => {
    const proceed = window.confirm('are you sure?');
    if (proceed) {
      const url = `http://localhost:5000/inventory/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          const remaning = products.filter(product => product._id !== id);
          refreshProduct(remaning);
        })
    }
  }

  return (
    <>
      <div className="col">
        <div className="card h-100">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text"> <strong>ID:</strong> {_id}</p>
            <p className="card-text text-justify">{`${description.slice(0, 278)}`} <span className='text-primary' title={description}>More...</span></p>
            <p className="card-text"> <strong>Price:</strong> {price} TK</p>
            <p className="card-text"> <strong>Quantity:</strong> {quantity}</p>
            <p className="card-text"> <strong>Supplier:</strong> {supplier}</p>

          </div>
          <div className="card-footer d-flex justify-content-between bg-white">
            <button onClick={() => navigateToProductDetail(_id)} className="btn bike-btn">Manage Product</button>
            <button onClick={() => handleDelete(_id)} className="btn bike-btn">Delete</button>
          </div>
        </div>
      </div>

    </>
  );
};

export default SingleProduct;