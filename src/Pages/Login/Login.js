import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Login.css';


import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {

  const navigate = useNavigate();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  let errorElement;
  if (error) {
    errorElement = <p className='text-center text-danger fw-bold'>Error: {error && error.message}</p>
  }

  if (user) {
    console.log(user);
    navigate('/');
  }

  const handleLogin = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(email, password);
  }
  return (
    <div className='form-container'>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>

        <Button className='submit-btn mb-3' type="submit">
          Login
        </Button>
      </Form>

      {errorElement}

      <p>New to website? <Link to="/signup" className='text-primary fw-bold text-decoration-none'>Register Here!</Link></p>

      <SocialLogin />
    </div>
  );
};

export default Login;