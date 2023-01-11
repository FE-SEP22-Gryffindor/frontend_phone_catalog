import React from 'react';

type Props = {
  direction: 'prev' | 'next',
  disabled?: boolean,
}

export const SliderButton: React.FC<Props> = ({
  direction,
  disabled,
}) => {
  return (
    <button
      type='button'
      className={`
        button
        products-slider__button
        products-slider__button--${direction}
      `}
      disabled = {disabled}
    >
      {' '}
    </button>
  );
};
