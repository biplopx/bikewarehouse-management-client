import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className='hero-banner py-3'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 col-md-6 col-sm-12 order-1 order-lg-0 order-lg-0 order-sm-1">
            <h1 className='fs-1 mb-3'>Modern Warehouse Management System</h1>
            <p>Bikewarehouse is modern warehouse management web based software. Here you can add any kind of product. you can add product, delete product, quantitiy update etc. Many people our service to make there warehouse digital.</p>
            <Link className="btn bike-btn" to="/" role="button">Get Started</Link>
          </div>
          <div className="col-12 col-lg-6 col-md-6 col-sm-12 order-0 order-lg-1 order-md-1 order-sm-0">
            <img src="https://i.postimg.cc/jdyRGHcY/warehouse-management-software.png" className='img-fluid' alt="warehouse management software" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;