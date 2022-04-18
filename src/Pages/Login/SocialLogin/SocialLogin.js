import React from 'react';
import './SocialLogin.css';

import google from '../../../images/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const SocialLogin = () => {

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const handleSignInWithGoogle = () => {
    signInWithGoogle();
  }

  let errorElement;

  if (error) {
    errorElement = <p className='text-danger text-center fw-bold'>{error?.message}</p>
  }

  return (
    <>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='side-line'></div>
        <p className='mt-2 px-2'>or</p>
        <div className='side-line'></div>
      </div>

      <button onClick={handleSignInWithGoogle} className='login-google-btn' > <img src={google} alt="" /> <span>Login with Google</span></button>
      {errorElement}

    </>
  );
};

export default SocialLogin;