import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className='hero-banner py-3'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 col-md-6 col-sm-12 order-1 order-lg-0 order-lg-0 order-sm-1">
            <h1 className='fs-1 mb-3'>Modern Warehouse Management System</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste voluptatem corporis debitis sapiente a mollitia, itaque ullam sint sed quidem, cumque quia est amet fugit velit alias quasi neque aperiam.</p>
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