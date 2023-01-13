import React, { useCallback, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemPage.scss';
import { FullPhone, Phone } from '../../types/Phone';
import { getOnePhone, getNewPhones } from '../../api/phones';
// import { PhoneCard } from '../../components/PhoneCard';
import { ProductsSlider } from '../../components/ProdutsSlider';
import { PhonePagePhotoBlock } from '../../components/PhonePagePhotoBlock';
import { ColorBlock } from '../../components/ColorBlock';
import { CapacityBlock } from '../../components/CapacityBlock';

export const ItemPage = () => {
  const [newPhones, setNewPhones] = useState<Phone[]>([]);

  const loadNewPhones = useCallback(async() => {
    try {
      const res = await getNewPhones();

      setNewPhones(await res.items);
    } catch {
      throw new Error('Error loading new phones');
    }
  }, []);

  const { itemSlug } = useParams();

  if (!itemSlug) {
    return <p>Item not found(slug)</p>;
  }

  const [item, setItem] = useState<FullPhone>();

  const loadPhone = useCallback(async() => {
    try {
      const res = await getOnePhone(itemSlug);

      setItem(await res.items);
    } catch {
      throw new Error('Error loading phone');
    }
  }, []);

  useEffect(() => {
    loadPhone();
    loadNewPhones();
  }, []);

  if (!item) {
    return <p>Item not found(phone)</p>;
  }

  return (
    <div className="container-item-page">
      <div className="breadcrumbs">
        <a
          className="back"
          // eslint-disable-next-line no-shadow
          onClick={(event) => {
            event.preventDefault();
            history.back();
          }}
        >
          Back
        </a>
      </div>
      <h2 className="item--name">{item.name}</h2>
      <div className="item">
        <div className="item--specification">
          <PhonePagePhotoBlock images={item.additionalImages}/>
          <div className="item--variaton">
            <ColorBlock />
            <hr />
            <CapacityBlock />
            <hr />
            <div className="price">
            {/* <Link
              to="#buy"
              className={classNames('button__block-add', {
                'button__block-add-active': isActiveToCard,
              })}
              onClick={handleCardButton}
            >
              {!isActiveToCard ? 'Add to cart' : 'Added'}
            </Link> */}
            </div>
            <div className="item--tech-spec">
              <div className="item--tech-spec-table">
                <span>Screen</span>
                <span>{item.screen}</span>
              </div>
              <div className="item--tech-spec-table">
                <span>Memory</span>
                <span>{item.memory}</span>
              </div>
              <div className="item--tech-spec-table">
                <span>Ram</span>
                <span>{item.ram}</span>
              </div>
              <div className="item--tech-spec-table">
                <span>Year</span>
                <span>{item.year}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item--info">
        <div className="item--about">
          <h2>About</h2>
          <hr />
          {item.abouts.map(about => (
            <React.Fragment key={about.header}>
              <h3>{about.header}</h3>
              <p>{about.description}</p>
            </React.Fragment>
          ))}
        </div>
        <div className="item--tech-spec">
          <h2>Tech specs</h2>
          <hr />
          <div className="item--tech-spec-table">
            <span>Screen</span>
            <span>{item.screen}</span>
          </div>
          <div className="item--tech-spec-table">
            <span>Memory</span>
            <span>{item.memory}</span>
          </div>
          <div className="item--tech-spec-table">
            <span>Ram</span>
            <span>{item.ram}</span>
          </div>
          <div className="item--tech-spec-table">
            <span>Year</span>
            <span>{item.year}</span>
          </div>
        </div>
        </div>
        <ProductsSlider
          title="Related phones"
          products={newPhones}
        />
      </div>
    </div>
  );
};
