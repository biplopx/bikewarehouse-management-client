
import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase';
import Loading from '../Loading/Loading';
import PageTitle from '../PageTitle/PageTitle';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  let location = useLocation();
  let displayError;
  let from = location.state?.from?.pathname || "/";

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, resetError] = useSendPasswordResetEmail(auth);


  // Get Input Values
  const handleEmailInput = event => {
    setEmail(event.target.value);
  }
  const handlePasswordInput = event => {
    setPassword(event.target.value);
  }

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from])

  // Loading
  if (loading) {
    return <Loading></Loading>;
  }

  // user signup error handle
  if (error || resetError) {
    displayError = <div className="alert alert-danger my-3" role="alert">Error: {error?.message}</div>
  }

  // Handle User Registration
  const handleLogin = event => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  // Reset Password
  const resetPassword = async () => {
    if (email) {
      sendPasswordResetEmail(email);
      toast('Password reset email send');
    }
    else {
      toast('Please enter your email address');
    }
  }


  return (
    <section className='py-3'>
      <PageTitle title="Login"></PageTitle>
      <div className="container">
        {
          user ?
            <>
              <div className='vh-50'>
                <h2 className='text-center'>You are already logged</h2>
              </div>
            </>
            :
            <>
              <div className="row align-items-center gap-5 mx-auto">
                <div className="col-lg-6 col-md-6 col-12 order-1 order-lg-0 order-lg-0 order-sm-1">
                  <img src="https://i.postimg.cc/kXx4TnSs/login-illustration.png" className='img-fluid' alt="login" />
                </div>
                <div className='col-lg-5 col-md-6 col-12 order-1 order-lg-0 order-lg-0 order-sm-1'>
                  <div className='border rounded p-3'>

                    <h2>Please Login</h2>
                    {displayError}
                    <form onSubmit={handleLogin}>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input onBlur={handleEmailInput} type="email" className="form-control" id="email" name='email' />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input onBlur={handlePasswordInput} type="password" className="form-control" id="password" name='password' />
                      </div>
                      <button type="submit" className="btn w-100 bike-btn mb-4">Login</button>
                    </form>
                    <p className='mt-3 pe-auto'>New to Genius Car <Link to='/register'>Please Register</Link></p>
                    <p>Forget Password? <button className='btn p-0' onClick={resetPassword}>Reset Password</button> </p>
                    <SocialLogin></SocialLogin>
                  </div>
                </div>
                <ToastContainer></ToastContainer>
              </div>
            </>
        }

      </div>
    </section>
  );
};

export default Login;