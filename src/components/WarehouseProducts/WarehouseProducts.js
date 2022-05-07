import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
// import { Link } from 'react-router-dom';
import SingleProduct from '../SingleProduct/SingleProduct';

const WarehouseProducts = () => {
  const [products] = useProducts();
  const sixProducts = products.slice(0, 6);
  return (
    <section className='py-4'>
      <div className="container text-center">
        <h2 className="text-center mb-4">Products In Warehouse</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {sixProducts.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)}
        </div>
        <button className='btn bike-btn mt-3'><Link to="/manage-inventories" className='text-white'>Manage Invetories</Link></button>
      </div>
    </section>
  );
};

export default WarehouseProducts;