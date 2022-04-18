import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h4>enter your detail for checkout for service id :{serviceId} </h4>
    </div>
  );
};

export default Checkout;