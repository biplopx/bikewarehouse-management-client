import React from 'react';

const Login = () => {
  return (
    <section className='py-3'>
      <div className="container">
        <div className="row align-items-center gap-5 mx-auto">
          <div className="col-lg-6 col-md-6 col-12 order-1 order-lg-0 order-lg-0 order-sm-1">
            <img src="https://i.postimg.cc/kXx4TnSs/login-illustration.png" className='img-fluid' alt="login" />
          </div>
          <div className='col-lg-5 col-md-6 col-12 order-1 order-lg-0 order-lg-0 order-sm-1'>
            <div className='border rounded p-3'>
              <h2>Please Login</h2>
              <form>
                <div className="mb-3">
                  <label for="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" name='email' />
                </div>
                <div className="mb-3">
                  <label for="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" name='password' />
                </div>
                <button type="submit" className="btn w-100 bike-btn">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;