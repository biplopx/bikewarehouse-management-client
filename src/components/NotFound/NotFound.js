import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="mx-auto bg-white col col-lg-7 col-md-7 m-5 text-center">
            <img src='https://i.postimg.cc/prxq3Qtf/not-found-page.png' width="90%" alt='page not found' />
            <Link className="btn bike-btn mb-3" to="/" role="button">Back To Home</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;