/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-boolean-value */
import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselBootstrap.scss';

import img1 from './ap2_1100.png';
import img2 from './ap4_1100.png';
import img3 from './ap4_1100.jpg';
import img4 from './ap2_1100.jpg';

const swiperImg = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
];

export const CarouselBootstrap: React.FC = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setInnerWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener('resize', () => {
        setInnerWidth(window.innerWidth);
      });
    };
  }, [innerWidth]);

  return (
    <>
      <h1 className='carousel__title'>Welcome to Nice Gadgets store!</h1>
      <div className="home-corusel">
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

      </div>
    </>
  );
};
