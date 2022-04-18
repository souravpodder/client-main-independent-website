import React from 'react';
import './Testimonials.css';

import couple from '../../../images/testimonials/couple.jpg';
import bigman from '../../../images/testimonials/bigman.jpg';
import man from '../../../images/testimonials/man.jpg';
import girl from '../../../images/testimonials/girl.jpg';

const Testimonials = () => {
  return (
    <div className='container-fluid pb-5 testimonial-container'>
      <h3 className='text-center text-primary fw-bold mt-5 pt-5'>Customer Testimonials</h3>
      <div className="row gy-4 testimonial-row">

        <div className="col-lg-6">
          <div className='d-flex align-items-center testimonial-content'>
            <img src={couple} alt="" />
            <blockquote>"As a couple, we first were hesitated with whom we will get as our travel guide.We are happy that we chose him all over others. He guided us though our journy like a well wisher friend of us. Thanks for the great service. Wish to get him on our next travel again. " </blockquote>
          </div>

        </div>

        <div className="col-lg-6">
          <div className='d-flex align-items-center testimonial-content'>
            <img src={bigman} alt="" />
            <blockquote>"At This old age, it is quite difficult to travel. I hired him almost 2 months ago for my tour. He behaved with me like my son and tried his best to give me a safe and memorable journey . I will recommend him from my heart as i don't think you will get a better service somewhere else" </blockquote>
          </div>
        </div>
        <div className="col-lg-6">
          <div className='d-flex align-items-center testimonial-content'>
            <img src={man} alt="" />
            <blockquote>"I don't get much opprtunities for travel for my office works. I made a schedule on my last vacation to make a trip. Fortunately i got him when i needed a professional travel guide. He is so much expert in this field. He guided me in every single step. He went beyond my expectations as well." </blockquote>
          </div>
        </div>
        <div className="col-lg-6">
          <div className='d-flex align-items-center testimonial-content'>
            <img src={girl} alt="" />
            <blockquote>"I am fond of travel from a very young age. I often travel with my friends. But last time i couldn't get any of my friends to go with me. So i hired him. He did a great job in his work. After one day i felt like i am travelling with one of my close friend. I will remember the tour for a long time. "</blockquote>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Testimonials;