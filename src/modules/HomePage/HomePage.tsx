import React from 'react';
import { Carousel } from '../../components/Carousel/Carousel';

// import { Carousel } from '../../components/Carousel';
// import { ProductsSlider } from '../../components/ProductsSlider';
// import { CategoryNav } from '../../components/CategoryNav';
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
          {/* <ProductsSlider
            title="Hot prices"
            filterCriteria="discount"
            sortBy="discount-value"
          /> */}
          ProductsSlider - Brand New Models
        </section>
        <section className="home__section">
          {/* <CategoryNav /> */}
          CategoryNav - SHOP by category
        </section>
        <section className="home__section">
          {/* <ProductsSlider
            title="Brand new models"
            filterCriteria="no-discount"
            sortBy="age"
          /> */}
          ProductsSlider - HOT prices
        </section>
      </div>
    </div>
  );
};
