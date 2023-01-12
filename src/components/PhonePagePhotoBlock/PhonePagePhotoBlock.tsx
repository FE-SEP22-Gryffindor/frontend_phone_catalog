import React, { useState } from 'react';
import classNames from 'classnames';
import './PhonePagePhotoBlock.scss';

import PhoneZagluwkaFirst from '../../img/Phone_zagluwka_1.jpg';
import PhoneZagluwkaSecond from '../../img/Phone_zagluwka_2.jpg';
import PhoneZagluwkaThird from '../../img/Phone_zagluwka_3.jpg';
import PhoneZagluwkaFourth from '../../img/Phone_zagluwka_4.png';
import PhoneZagluwkaFifth from '../../img/Phone_zagluwka_5.png';

const PhonePhoto = [
  {
    id: 1,
    image: PhoneZagluwkaFirst,
  },
  {
    id: 2,
    image: PhoneZagluwkaSecond,
  },
  {
    id: 3,
    image: PhoneZagluwkaThird,
  },
  {
    id: 4,
    image: PhoneZagluwkaFourth,
  },
  {
    id: 5,
    image: PhoneZagluwkaFifth,
  },
];

export const PhonePagePhotoBlock: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState(PhonePhoto[0].image);

  return (
  // <div className="item--gallery">
  //   <div className="item--gallery-big">
  //     <img alt="" src={foundItem.image}/>
  //   </div>

  //   <div className="items--gallery-small">
  //     <img alt="" src={foundItem.image}/>
  //     <img alt="" src={foundItem.image}/>
  //     <img alt="" src={foundItem.image}/>
  //     <img alt="" src={foundItem.image}/>
  //     <img alt="" src={foundItem.image}/>
  //   </div>
  // </div>

    <div className='item--gallery'>
      <div className='item--gallery-big'>
        <img
          src={activePhoto}
          alt="mainPhoto"
          className='photo-main'
        />
      </div>

      <div className='items--gallery-small'>
        {PhonePhoto.map(phone => (
          // <div
          //   key={phone.id}
            // className={classNames('photo__block__secondary__container',
            //   { 'photo__block-active': phone.image === activePhoto })
            // }
          //   onClick={() => setActivePhoto(phone.image)}
          // >
            <img
              src={phone.image}
              alt="secondary-photo"
              key={phone.id}
              className={classNames('photo-secondary',
                { 'photo-secondary-active': phone.image === activePhoto })
              }
              onClick={() => setActivePhoto(phone.image)}
            />
          // </div>
        ))}
      </div>
    </div>
  );
};
