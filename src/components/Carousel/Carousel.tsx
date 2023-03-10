/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-boolean-value */
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import './Carousel.scss';

import img1 from './apple1_700.jpg';
import img2 from './apple3_700.jpg';
import img3 from './ap4_1100.jpg';
import img4 from './ap2_1100.jpg';

const swiperImg = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
];

export const Carousel: React.FC = () => {
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
      <div className="container">
        <Swiper
          navigation={true}
          loop={true}
          modules={[Autoplay, Navigation]}
          className="swiper__slider"
        >
          {swiperImg.map((item) => (
            <SwiperSlide key={item.id} className="swiper__slide">
                <img
                  src={item.img}
                  alt={`apple${item.id}`}
                  className="swiper__img"
                />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
