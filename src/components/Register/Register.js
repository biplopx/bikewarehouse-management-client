import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
  // input states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  let displayError;

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);


  // update
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);


  useEffect(() => {
    if (user) {
      alert('Registration Successful');
      navigate('/')
    }
  }, [user, navigate])

  // Loading
  if (loading || updating) {
    return <Loading></Loading>;
  }

  // Get Input Values
  const handleNameInput = event => {
    setName(event.target.value);
  }
  const handleEmailInput = event => {
    setEmail(event.target.value);
  }
  const handlePasswordInput = event => {
    setPassword(event.target.value);
  }

  // user signup error handle
  if (error) {
    displayError = <div className="alert alert-danger my-3" role="alert">Error: {error?.message}</div>
  }

  if (updateError) {
    displayError = <div className="alert alert-danger my-3" role="alert">Error: {error?.message}</div>;
  }



  // Handle User Registration
  const handleRegister = async (event) => {
    event.preventDefault();
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  }

  return (
    <section className='py-3'>
      <div className="container">
        {
          user ?
            <>
              <div className='vh-50'>
                <h2 className='text-center'>You are already Registered</h2>
              </div>
            </>
            :
            <>
              <div className="row align-items-center gap-5 mx-auto">
                <div className="col-lg-6 col-md-6 col-12 order-1 order-lg-0 order-lg-0 order-sm-1">
                  <img src="https://i.postimg.cc/X7XVPmJZ/registration-illustration.png" className='img-fluid' alt="login" />
                </div>
                <div className='col-lg-5 col-md-6 col-12 order-1 order-lg-0 order-lg-0 order-sm-1'>
                  <div className='border rounded p-3'>
                    <h2>Please Register</h2>
                    {displayError}
                    <form onSubmit={handleRegister}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input onBlur={handleNameInput} type="text" className="form-control" id="name" name="name" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input onBlur={handleEmailInput} type="email" className="form-control" id="email" name="email" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input onBeforeInput={handlePasswordInput} type="password" className="form-control" id="password" name="password" />
                      </div>
                      <button type="submit" className="btn w-100 bike-btn mb-4">Register</button>
                    </form>
                    <p className='mt-3 pe-auto'>Already have account? <Link to='/login'>Please Login</Link></p>
                    <SocialLogin></SocialLogin>
                  </div>
                </div>
              </div>
            </>
        }

      </div>
    </section>
  );
};

export default Register;