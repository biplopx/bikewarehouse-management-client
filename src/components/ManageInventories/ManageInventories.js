import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import PageTitle from '../PageTitle/PageTitle';
import SingleProduct from '../SingleProduct/SingleProduct';

const ManageInventories = () => {
  const [products] = useProducts();
  const [stateProducts, setSateProducts] = useState(products);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    setSateProducts(products)
  }, [products])
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

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