import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';
import google from '../../images/google.png';

const Login = () => {
  return (
    <div className='form-container'>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button className='submit-btn mb-3' type="submit">
          Login
        </Button>
      </Form>

      <p>New to website? <Link to="/signup" className='text-primary fw-bold text-decoration-none'>Register Here!</Link></p>

      <div className='d-flex justify-content-center align-items-center'>
        <div className='side-line'></div>
        <p className='mt-2 px-2'>or</p>
        <div className='side-line'></div>
      </div>

      <button className='login-google-btn'> <img src={google} alt="" /> <span>Login with Google</span></button>
    </div>
  );
};

export default Login;