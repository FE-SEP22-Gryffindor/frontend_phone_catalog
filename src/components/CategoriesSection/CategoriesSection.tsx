import React from 'react';
import './CategoriesSection.scss';
import categoryPhoneImage from '../../img/Category-phone.png';
import categoryTabImage from '../../img/Category-tab.png';
import categoryTabAccessories from '../../img/Category-accessories.png';
import { Link } from 'react-router-dom';

export const CategoriesSection: React.FC = () => {
  return (
    <>
      <h2 className="categories-section-title">Shop by category</h2>
      <section className="categories-section">
        <Link to="/phones">
          <div className="categories-section-image">
            <img src={categoryPhoneImage} alt="" />
            <figcaption>Mobile phones</figcaption>
            <p>30 models</p>
          </div>
        </Link>

        <div className="categories-section-image">
          <img src={categoryTabImage} alt="" />
          <figcaption>Tablets</figcaption>
          <p>0 models</p>
        </div><div className="categories-section-image">
          <img src={categoryTabAccessories} alt="" />
          <figcaption>Accessories</figcaption>
          <p>0 models</p>
        </div>
      </section>
    </>
  );
};
