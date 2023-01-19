/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import './Slider.scss';
import classNames from 'classnames';
import slide1 from './img/slider-1.png';
import slide2 from './img/slider-2.png';
// import slide3 from './img/ap2_1100.png';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    url: slide1,
    slogan: <h2>Now available <br /> in our store</h2>,
    captionText: 'Iphone 14',
    link: '10-apple-iphone-14-pro-128gb-deep-purple-mq0g3',
  },
  {
    id: 2,
    url: slide2,
    slogan: <h2>Now available <br /> in our store</h2>,
    captionText: 'Iphone 14',
    link: '10-apple-iphone-14-pro-128gb-deep-purple-mq0g3',
  },
  {
    id: 3,
    url: slide1,
    slogan: <h2>Now available <br /> in our store</h2>,
    captionText: 'Iphone 14',
    link: '10-apple-iphone-14-pro-128gb-deep-purple-mq0g3',
  },
];

export const Slider: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(1);

  const plusSlides = (num: number) => {
    // eslint-disable-next-line no-console

    if (num === -1 && currentBanner !== 1) {
      return setCurrentBanner(currentBanner - 1);
      // console.log('setCurrentBanner(currentBanner - 1);');
    }

    if (num === -1 && currentBanner === 1) {
      return setCurrentBanner(3);
    }

    if (num === 1 && currentBanner !== 3) {
      setCurrentBanner(currentBanner + 1);
    }

    if (num === 1 && currentBanner === 3) {
      setCurrentBanner(1);
    }
  };

  // eslint-disable-next-line no-console
  console.log(currentBanner);

  const currentSlide = (num: number) => {
    // eslint-disable-next-line no-console
    setCurrentBanner(num);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      plusSlides(1);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentBanner]);

  return (
    <>
    <h1 className='carousel__title'>Welcome to Nice Gadgets store!</h1>
    <div className="slideshow-container">
      {slides.map(slide => (
        <div
          // className="mySlides fade"
          key={slide.id}

          className={classNames('mySlides fade',
            { active: slide.id === currentBanner })}
        >
            {/* <img src={slide.url} /> */}
            <div className="slider-image" style={{ backgroundImage: `url(${slide.url})` }} onTouchEnd={() => plusSlides(1)}></div>
          <div className="wrap-subbanner">
            <div className="left-subbanner">
              {slide.slogan}
              <Link to={`/phones/${slide.link}`} className="btn-slider-order">Order now</Link>
            </div>
            <div className="text">{slide.captionText}</div>
          </div>
      </div>
      ))}
      <div className="arrows-navigation">
        <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
        <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
      </div>
    </div>
    <br />

    <div>
      {slides.map(slide => (
        <span
        className={classNames('dot',
          { 'dot-active': slide.id === currentBanner })}
          onClick={() => currentSlide(slide.id)}
          key={slide.id}
        >
        </span>
      ))}
    </div>
    </>
  );
};
