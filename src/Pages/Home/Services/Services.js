import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  // console.log(services);
  return (
    <div className='container my-5'>
      <h3 className='text-center text-primary fw-bold mb-3'>My Services</h3>
      <div className="row g-5">
        {
          services.map(service => <Service key={service.id} service={service} />)
        }
      </div>
    </div>
  );
};

export default Services;