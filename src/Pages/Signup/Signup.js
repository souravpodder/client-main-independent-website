import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';

const Signup = () => {

  const navigate = useNavigate();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  let errorElement;
  if (error) {
    errorElement = <p className='text-center text-danger'>Error: {error && error.message}</p>
  }

  if (user) {
    navigate('/');
  }

  // get the email and password and create user 
  const handleSignUp = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(email, password);

  }



  return (
    <div className='form-container'>
      <Form onSubmit={handleSignUp}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>

        <Button className='submit-btn mb-3' type="submit">
          Sign Up
        </Button>
      </Form>

      {errorElement}

      <p>Already Registered? <Link to="/login" className='text-primary fw-bold text-decoration-none'>Login Here!</Link></p>

      <SocialLogin />
    </div>
  );
};

export default Signup;