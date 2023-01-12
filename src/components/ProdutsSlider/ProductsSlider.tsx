import React from 'react';
// import { SliderButton } from './SliderButton';
import { PhoneCard } from '../PhoneCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// import { products } from './testProduct';

import 'swiper/css';
import 'swiper/css/navigation';
import './ProductSlider.scss';
import { Phone } from '../../types/Phone';

type Props = {
  title: string,
  products: Phone[]
}

export const ProductsSlider: React.FC<Props> = ({ title, products }) => {
  return (
    <>
        <div className='container__swipe'>

          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={4}
            navigation={true}
            className="phone_slider"
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
