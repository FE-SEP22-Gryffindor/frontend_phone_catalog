import React, { useCallback, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemPage.scss';
import { FullPhone } from '../../types/Phone';
import { getOnePhone } from '../../api/phones';
import { PhoneCard } from '../../components/PhoneCard';
import { PhonePagePhotoBlock } from '../../components/PhonePagePhotoBlock';
import { ColorBlock } from '../../components/ColorBlock';
import { CapacityBlock } from '../../components/CapacityBlock';

export const ItemPage = () => {
  // const [phones, setPhones] = useState<Phone[]>([]);
  //
  // const loadPhones = useCallback(async() => {
  //   try {
  //     const res = await getPhones(1, 32);
  //
  //     setPhones(await res.items);
  //   } catch {
  //     throw new Error('Error loading phones');
  //   }
  // }, []);
  //
  // useEffect(() => {
  //   loadPhones();
  // }, []);

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

        <div className="related-items">
          <div className="related-items-header">
            <h2>You may also like</h2>
            <span className="related-items-navigation">
              <a className="pagination__link pagination__link-arrow">
                {'<'}
              </a>
              <a className="pagination__link pagination__link-arrow">
                {'>'}
              </a>
            </span>
          </div>
          <div className="related-items-carusel">
            <PhoneCard phone={item} />
            <PhoneCard phone={item} />
            <PhoneCard phone={item} />
            <PhoneCard phone={item} />
            {/* <PhoneCard phone={foundItem} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
