import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/Banner/Banner1.png';
import banner2 from '../../../images/Banner/Banner2.png';
import banner3 from '../../../images/Banner/Banner3.png';

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={banner2}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Get The Most Effective Guides</h3>
            <p>As I have so many previous experiences you will get the most effective guides from me</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Make Your journy safe</h3>
            <p>I will guide you to the places which are safe for you. so no worry about your safety</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={banner1}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Rivers Trip</h3>
            <p>Jorney in the most Beautiful Rivers and enjoy the sceneries</p>
          </Carousel.Caption>
        </Carousel.Item>


      </Carousel>
    </div>
  );
};

export default Banner;