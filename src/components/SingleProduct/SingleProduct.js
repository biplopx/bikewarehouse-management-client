import React from 'react';

const SingleProduct = ({ product }) => {
  const { _id, name, image, description, price, quantity, suppplier } = product;
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
            <p className="card-text"> <strong>Supplier:</strong> {suppplier}</p>

          </div>
          <div className="card-footer bg-white">
            <button className="btn bike-btn w-100">Manage Product</button>
          </div>
        </div>
      </div>

    </>
  );
};

export default SingleProduct;