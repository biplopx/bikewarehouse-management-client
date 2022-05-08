import React from 'react';

const OurServices = () => {
  const services = [
    {
      id: 1,
      name: 'Ground Transport',
      description: "Transport began providing transportation solutions to Transport’s contract warehousing customers in the 1980s.",
      image: 'https://i.postimg.cc/wBzvqKwc/delivery-truck.png'
    },
    {
      id: 2,
      name: 'Warehousing',
      description: "Transport provides warehousing, fulfillment services, and transportation management across North America.",
      image: 'https://i.postimg.cc/wvfTQ1g0/warehouse.png'
    },
    {
      id: 3,
      name: 'Parking And Storage',
      description: "We know almost of customers want to receive the products early so we try to provide destinations for customers.",
      image: 'https://i.postimg.cc/pLfW1GP9/inventory.png'
    }
  ]
  return (
    <section className='py-4'>
      <div className="container">
        <h2 className='text-center mb-4'>Our Services</h2>
        <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4">
          {
            services.map(service => <div key={service.id} className="col">
              <div className="card h-100 text-center">
                <div style={{ height: '150px', width: '150px', padding: '20px' }} className="mx-auto my-3 brand-color rounded-pill"><img src={service.image} className="" width="100px" alt="..." /></div>
                <div className="card-body">
                  <h4 className="card-title">{service.name}</h4>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>)
          }
        </div>
      </div>
    </section>
  );
};

export default OurServices;