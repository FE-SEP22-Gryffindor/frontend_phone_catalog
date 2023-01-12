import React, { useRef, useState } from 'react';
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
  return (
    <>
    <Swiper
        navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        // loop={true}
        // autoplay={{
        //   delay: 50000,
        //   disableOnInteraction: false,
        // }}
        className="mySwiper"
      >
        {swiperImg.map(item => (
          <SwiperSlide key={item.id}>
        <img src={item.img} alt={`apple${item.id}`} />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
        </SwiperSlide> */}
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
};
