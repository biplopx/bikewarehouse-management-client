import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let displayError;
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (loading) {
    <Loading></Loading>
  }
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [navigate, from, user])

  if (error) {
    displayError = <div className="alert alert-danger my-3" role="alert">Error: {error?.message}</div>;
  }

  return (
    <div>
      <div className="row">
        <div className="col"><hr /></div>
        <div className="col-auto">OR</div>
        <div className="col"> <hr /> </div>
      </div>
      {displayError}
      <button onClick={() => signInWithGoogle()} className='btn w-100 border text-center fw-bold'>
        <img src="https://i.postimg.cc/tRwrhM0w/google.png" className='me-2' width="30px" alt="" /> Sign in with Google</button>
    </div>
  );
};

export default SocialLogin;