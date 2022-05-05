import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase';

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const hangleGoogleSignIn = () => {

  }
  return (
    <div>
      <div className="row">
        <div className="col"><hr /></div>
        <div className="col-auto">OR</div>
        <div className="col"> <hr /> </div>
      </div>
      <button onClick={hangleGoogleSignIn} className='btn w-100 border text-center fw-bold'>
        <img src="https://i.postimg.cc/tRwrhM0w/google.png" className='me-2' width="30px" alt="" /> Sign in with Google</button>
    </div>
  );
};

export default SocialLogin;