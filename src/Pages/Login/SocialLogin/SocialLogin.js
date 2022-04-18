import React from 'react';
import './SocialLogin.css';

import google from '../../../images/google.png';


const SocialLogin = () => {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='side-line'></div>
        <p className='mt-2 px-2'>or</p>
        <div className='side-line'></div>
      </div>

      <button className='login-google-btn'> <img src={google} alt="" /> <span>Login with Google</span></button>

    </>
  );
};

export default SocialLogin;