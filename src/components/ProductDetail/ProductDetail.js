import { useParams } from 'react-router-dom';
import useProductDetail from '../../hooks/useProductDetail';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product] = useProductDetail(productId);

  return (
    <section style={{ background: '#D2E4FF' }} className='py-5'>
      <div className="container">
        <div className="row">
          <div className="col mx-auto col-lg-8">
            <div style={{ borderRadius: '15px' }} className="p-4 bg-white">
              <h2 className='text-center'>Product Details</h2>
              <hr></hr>
              <div className='p-3 mb-3'>
                <img src={product.image} alt="" className='img-fluid img-thumbnail d-block mx-auto' />
              </div>
              <div>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='w-25 fw-bold'>Product ID</td>
                      <td>{product._id}</td>
                    </tr>
                    <tr>
                      <td className='w-25 fw-bold'>Name</td>
                      <td>{product.name}</td>
                    </tr>
                    <tr>
                      <td className='w-25 fw-bold'>Price</td>
                      <td>{product.price}</td>
                    </tr>
                    <tr>
                      <td className='w-25 fw-bold'>Description</td>
                      <td>{product.description}</td>
                    </tr>
                    <tr>
                      <td className='w-25 fw-bold'>Suppplier</td>
                      <td>{product.supplier}</td>
                    </tr>
                    <tr>
                      <td className='w-25 fw-bold'>Quantity</td>
                      <td>{product.quantity}</td>
                    </tr>
                  </tbody>
                </table>
                <div className='border p-2'>
                  <h3 className='text-center'>Manage</h3>
                  <div className='d-flex justify-content-center mb-4'>
                    <button className="btn bike-btn me-2">Delivered</button>
                    <button className="btn btn-success">Sold: No</button>
                  </div>
                  <div className='d-flex justify-content-center flex-wrap'>
                    <input type="number" className="form-control shadow-none w-75 me-4" id="quantity" name='quantity' />
                    <button className="btn bike-btn">Add Quantity</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;