import React, { useCallback, useEffect, useState } from 'react';
// import { Carousel } from '../../components/Carousel';
import { ProductsSlider } from '../../components/ProdutsSlider';
// import { CategoryNav } from '../../components/CategoryNav';
import { CategoriesSection } from '../../components/CategoriesSection';
import './HomePage.scss';
import { getDiscountPhones, getNewPhones } from '../../api/phones';
import { Phone } from '../../types/Phone';

export const HomePage = () => {
  const [newPhones, setNewPhones] = useState<Phone[]>([]);
  const [discountPhones, setDiscountPhones] = useState<Phone[]>([]);

  const loadNewPhones = useCallback(async() => {
    try {
      const res = await getNewPhones();

      setNewPhones(await res.items);
    } catch {
      throw new Error('Error loading new phones');
    }
  }, []);

  const loadDiscountPhones = useCallback(async() => {
    try {
      const res = await getDiscountPhones();

      setDiscountPhones(await res.items);
    } catch {
      throw new Error('Error loading discount phones');
    }
  }, []);

  useEffect(() => {
    loadNewPhones();
    loadDiscountPhones();
  }, []);

  // eslint-disable-next-line no-console
  console.log('new:', newPhones);

  // eslint-disable-next-line no-console
  console.log('discount:', discountPhones);

  return (
    <div className="home">
      <div className="container container--with-min-height">
        <section className="home__section">
          {/* <Carousel /> */}
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
