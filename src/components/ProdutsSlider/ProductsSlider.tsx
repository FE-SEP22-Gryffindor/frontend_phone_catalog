import React from 'react';
// import { SliderButton } from './SliderButton';
import { PhoneCard } from '../PhoneCard';
import { Swiper as FFF, SwiperSlide } from 'swiper/react';
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

// const swiper1: any = new Swiper('.swiper', {
//   modules: [Navigation, Pagination, Scrollbar],
//   speed: 500,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

export const ProductsSlider: React.FC<Props> = ({ title, products }) => {
  return (
    <>
        <div className='container__swipe'>

          <FFF
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={4}
            navigation={true}
            className='fffffff'
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

          </FFF>

        </div>
    </>
  );
};
