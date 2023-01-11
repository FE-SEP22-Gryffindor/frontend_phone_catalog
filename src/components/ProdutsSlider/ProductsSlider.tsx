import React from 'react';
import { SliderButton } from './SliderButton';
import { PhoneCard } from '../PhoneCard';
import './ProductSlider.scss';

import { products } from './testProduct';

type Props = {
  title: string,
}

export const ProductsSlider: React.FC<Props> = ({ title }) => {
  return (
    <div className='products-slider'>
      <div className='products-slider__header grid'>
        <h2 className='products-slider__title'>{title}</h2>

      <SliderButton
          direction='prev'
          disabled={false}
      />
      <SliderButton
          direction='next'
          disabled={false}
      />

      </div>

      <div className='products-slider__products-container'>
        <div className='products-slider__products'>
          {products.map((product) => (
            <div
              className='products-slider__products-container'
              key={product.slug}
            >
              <PhoneCard phone={product}/>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};
