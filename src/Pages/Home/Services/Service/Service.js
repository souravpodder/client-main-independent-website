import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
  const { id, name, price, img, description } = service;
  const navigate = useNavigate();
  // navigate to the dynamic route 
  const navigateToCheckout = (id) => {
    navigate(`/checkout/${id}`);
  }
  return (
    <div className='col-md-6 col-lg-4'>
      <div className='h-100 service'>
        <img className='w-100 service-image' src={img} alt="" />
        <div className='service-content'>
          <h5>Service: {name}</h5>
          <p className='fw-bold'>Price: ${price}</p>
          <p><small className='service-description'>{description}</small></p>
          <button onClick={() => navigateToCheckout(id)} className='checkout-btn d-block mx-auto'>Go to Checkout</button>
        </div>

      </div>
    </div>
  );
};

export default Service;