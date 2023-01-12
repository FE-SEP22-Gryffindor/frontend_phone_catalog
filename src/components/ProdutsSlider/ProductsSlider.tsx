import React from 'react';
// import { SliderButton } from './SliderButton';
import { PhoneCard } from '../PhoneCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import { products } from './testProduct';

import 'swiper/css';
import 'swiper/css/navigation';
import './ProductSlider.scss';

type Props = {
  title: string,
}

export const ProductsSlider: React.FC<Props> = ({ title }) => {
  return (
    <>
      {/* <div className='products-slider__header grid'> */}

      {/* </div> */}

        <div className='container__swipe'>
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={4}
            navigation={true}
          >

            <span
              slot='container-start'
              className='products-slider__title'>{title}
            </span>

            {products.map((product) => (
              <SwiperSlide className='swiper-slide'
              key={product.slug}
              >
                <PhoneCard phone={product}/>
              </SwiperSlide>
            ))}

          </Swiper>

        </div>
    </>
  );
};
