import classNames from 'classnames';
import React, { useState } from 'react';
import './ColorBlock.scss';

export const ColorBlock: React.FC = () => {
  const [color, setColor] = useState('gold');

  return (
    <div className="colors">
      <div className='colors__info'>
        <p className='colors__title'>
          Available colors
        </p>

        <p className='colors__id'>
          ID: 802390
        </p>
      </div>

      <div className="colors-block">
        <div
          className={classNames(
            'colors-block__container',
            { 'colors-block__container-active': color === 'gold' },
          )}
          onClick={() => setColor('gold')}
        >
          <div
            className="
           colors-block__picker
           colors-block__picker-gold"
          ></div>
        </div>

        <div
          className={classNames(
            'colors-block__container',
            { 'colors-block__container-active': color === 'grey' },
          )}
          onClick={() => setColor('grey')}
        >
          <div
            className='
           colors-block__picker
           colors-block__picker-grey'
          ></div>
        </div>

        <div
          className={classNames(
            'colors-block__container',
            { 'colors-block__container-active': color === 'black' },
          )}
          onClick={() => setColor('black')}
        >
          <div
            className='
            colors-block__picker
            colors-block__picker-black'
          ></div>
        </div>

        <div
          className={classNames(
            'colors-block__container',
            { 'colors-block__container-active': color === 'silver' },
          )}
          onClick={() => setColor('silver')}
        >
          <div
            className='
           colors-block__picker
           colors-block__picker-silver'
          ></div>
        </div>
      </div>
    </div>
  );
};
