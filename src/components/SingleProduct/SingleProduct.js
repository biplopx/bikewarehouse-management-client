import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const SingleProduct = ({ product, refreshProduct }) => {
  const { _id, name, image, description, price, quantity, supplier } = product;
  const navigate = useNavigate();
  const [products] = useProducts();

  const [show, setShow] = useState(false);
  // const [confirm, setConfirm] = useState(false);

  // const handleClose = (isDelete) => {
  //   if (isDelete) {
  //     setConfirm(true)
  //   }
  //   else {
  //     setConfirm(false)
  //   }
  //   setShow(false)
  // };

  // const handleShow = () => setShow(true);

  const navigateToProductDetail = id => {
    navigate(`/inventory/${id}`)
  }

  const handleDelete = () => {
    // const proceed = window.confirm('are you sure?');
    setShow(false)
    const url = `https://bikewarehouse-heroku.herokuapp.com/inventory/${_id}`;
    fetch(url, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        const remaning = products.filter(product => product._id !== _id);
        refreshProduct(remaning);
      })
  }

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            No
          </Button>
          <Button variant="primary" onClick={() => handleDelete(true)}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

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
            <button onClick={() => setShow(true)} className="btn bike-btn">Delete</button>
          </div>
        </div>
      </div>

    </>
  );
};

export default SingleProduct;