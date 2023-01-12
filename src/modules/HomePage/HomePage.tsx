import React from 'react';
import { Carousel } from '../../components/Carousel/Carousel';

// import { Carousel } from '../../components/Carousel';
import { ProductsSlider } from '../../components/ProdutsSlider';
// import { CategoryNav } from '../../components/CategoryNav';
import { CategoriesSection } from '../../components/CategoriesSection';
import './HomePage.scss';

export const HomePage = () => {
  return (
    <div className="home">
      <div className="container container--with-min-height">
        <section className="home__section">
          <Carousel />
          COROUSEL
        </section>
        <section className="home__section">
          <ProductsSlider
            title="Brand new models"
            // filterCriteria="no-discount"
            // sortBy="age"
          />
        </section>
        <section className="home__section">
          <CategoriesSection />
        </section>
        <section className="home__section">
          <ProductsSlider
            title="Hot prices"
            // filterCriteria="discount"
            // sortBy="discount-value"
          />
        </section>
      </div>
    </div>
  );
};
