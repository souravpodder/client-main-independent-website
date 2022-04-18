import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  let from = location.state?.from?.pathname || "/";

  let errorElement;
  if (error) {
    errorElement = <p className='text-center text-danger fw-bold'>Error: {error && error.message}</p>
  }


  if (user) {
    navigate(from, { replace: true });
  }

  // get and set the email 
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  }



  const handleLogin = event => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  const handleResetPassword = async () => {

    if (email) {
      await sendPasswordResetEmail(email);
      toast('Email sent Successfully!');
    }
    else {
      toast('Please enter your email address.');
    }


  }
  return (
    <div className='form-container'>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required onBlur={handleEmailBlur} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={handlePasswordBlur} type="password" name="password" placeholder="Password" required />
        </Form.Group>

        <Button className='submit-btn mb-3' type="submit">
          Login
        </Button>
      </Form>

      {errorElement}

      <p>New to Travellers Point? <Link to="/signup" className='text-primary fw-bold text-decoration-none'>Register Here!</Link></p>

      <p>Forgot Password? <button onClick={handleResetPassword} className='btn btn-link text-primary fw-bold text-decoration-none'>Reset Password</button></p>

      <SocialLogin />
      <ToastContainer />
    </div>
  );
};

export default Login;