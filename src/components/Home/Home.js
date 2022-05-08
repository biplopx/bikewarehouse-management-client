import React from 'react';
import Banner from '../Banner/Banner';
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
    </>
  );
};

export default Home;