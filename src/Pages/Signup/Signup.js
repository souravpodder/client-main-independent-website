import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import google from '../../images/google.png';

const Signup = () => {
  return (
    <div className='form-container'>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Accept terms and conditions" />
        </Form.Group>
        <Button className='submit-btn mb-3' type="submit">
          Sign Up
        </Button>
      </Form>

      <p>Already Registered? <Link to="/login" className='text-primary fw-bold text-decoration-none'>Login Here!</Link></p>

      <div className='d-flex justify-content-center align-items-center'>
        <div className='side-line'></div>
        <p className='mt-2 px-2'>or</p>
        <div className='side-line'></div>
      </div>

      <button className='login-google-btn'> <img src={google} alt="" /> <span>Login with Google</span></button>
    </div>
  );
};

export default Signup;