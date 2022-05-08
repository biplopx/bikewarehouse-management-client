import React from 'react';

const OurClients = () => {
  return (
    <section className='py-4'>
      <div className="container">
        <h2 className='mb-4 text-center'>Our Clients</h2>
        <div className="row row-cols-2 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 justify-content-center">
          <div className="col border rounded p-3 text-center m-2"><img src="https://cdn-0.motorcycle-logos.com/wp-content/uploads/2017/01/Bajaj-Logo-768x300.png" width="160px" alt="" /></div>
          <div className="col border rounded p-3 text-center m-2"><img src="https://cdn-0.motorcycle-logos.com/wp-content/uploads/2016/10/Yamaha-Logo.png" width="160px" alt="" /></div>
          <div className="col border rounded p-3 text-center align-middle m-2"><img src="https://cdn-0.motorcycle-logos.com/wp-content/uploads/2016/10/Logo-Suzuki-768x163.png" width="160px" alt="" /></div>
          <div className="col border rounded p-3 text-center m-2"><img src="https://w7.pngwing.com/pngs/189/368/png-transparent-honda-logo-honda-logo-car-motorcycle-honda-cr-v-moto-text-trademark-logo.png" width="160px" alt="" /></div>
          <div className="col border rounded p-3 text-center m-2"><img src="https://cdn-0.motorcycle-logos.com/wp-content/uploads/2016/11/Husaberg-logo-768x248.png" width="160px" alt="" /></div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;