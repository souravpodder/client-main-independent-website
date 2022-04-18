import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/Banner/Banner1.png';
import banner2 from '../../../images/Banner/Banner2.png';
import banner3 from '../../../images/Banner/Banner3.png';
import './Banner.css';

const Banner = () => {
  return (
    <div className='banner'>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={banner2}
            alt="First slide"
          />
          <Carousel.Caption className='slider-content'>
            <div >
              <h5 className='slider-header'>Get The Most Effective Guides</h5>
              <p className='slider-text'>As I have so many previous experiences you will get the most effective guides from me</p>
            </div>

          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Second slide"
          />
          <Carousel.Caption className='slider-content'>
            <div>
              <h5 className='slider-header'>Make Your journy safe</h5>
              <p className='slider-text'>I will guide you to the places which are safe for you. so no worry about your safety</p>
            </div>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={banner1}
            alt="Third slide"
          />
          <Carousel.Caption className='slider-content'>
            <div>
              <h5 className='slider-header'>Rivers Trip</h5>
              <p className='slider-text'>Jorney in the most Beautiful Rivers and enjoy the sceneries</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>


      </Carousel>
    </div>
  );
};

export default Banner;