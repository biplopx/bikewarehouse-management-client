import useProducts from '../../hooks/useProducts';
// import { Link } from 'react-router-dom';
import SingleProduct from '../SingleProduct/SingleProduct';

const WarehouseProducts = () => {
  const [products, setProducts] = useProducts();

  return (
    <section className='py-4'>
      <div className="container">
        <h2 className="text-center mb-4">Products In Warehouse</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)}
        </div>
      </div>
    </section>
  );
};

export default WarehouseProducts;