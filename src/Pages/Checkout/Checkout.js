import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
  const { serviceId } = useParams();

  const handleCheckoutInfoSubmit = (event) => {
    event.preventDefault();
    toast('thank you for the booking.');
  }
  return (
    <div className='form-container'>
      <h3 className='text-center'>service id: {serviceId}</h3>
      <Form onSubmit={handleCheckoutInfoSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Address</Form.Label>
          <Form.Control type="text" name="address" placeholder="Enter address" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" name="phone" placeholder="Enter Phone Number" required />
        </Form.Group>

        <Button className='submit-btn mb-3' type="submit">
          Submit
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default Checkout;