import React from 'react';
import Banner from '../Banner/Banner';
import OurClients from '../OurClients/OurClients';
import OurServices from '../OurServices/OurServices';
import PageTitle from '../PageTitle/PageTitle';
import WarehouseProducts from '../WarehouseProducts/WarehouseProducts';

const Home = () => {
  return (
    <>
      <PageTitle title="Home"></PageTitle>
      <Banner></Banner>
      <OurServices></OurServices>
      <WarehouseProducts></WarehouseProducts>
      <OurClients></OurClients>
    </>
  );
};

export default Home;