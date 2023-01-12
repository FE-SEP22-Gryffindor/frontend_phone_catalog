import React, { useCallback, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemPage.scss';
import { Phone } from '../../types/Phone';
import { getPhones } from '../../api/phones';
import { PhoneCard } from '../../components/PhoneCard';
import { PhonePagePhotoBlock } from '../../components/PhonePagePhotoBlock';
import { ColorBlock } from '../../components/ColorBlock';
import { CapacityBlock } from '../../components/CapacityBlock';

export const ItemPage = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  const loadPhones = useCallback(async() => {
    try {
      const res = await getPhones(1, 32);

      setPhones(await res.items);
    } catch {
      throw new Error('Error loading phones');
    }
  }, []);

  useEffect(() => {
    loadPhones();
  }, []);

  const { itemSlug } = useParams();

  const foundItem = phones.find(phone => phone.slug === itemSlug);

  if (foundItem === undefined) {
    return <p>Item not found</p>;
  }

  // eslint-disable-next-line no-console
  console.log(foundItem);

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
      <h2 className="item--name">{foundItem.name}</h2>
      <div className="item">
        <div className="item--specification">
          <PhonePagePhotoBlock/>
          <div className="item--variaton">
            <ColorBlock />
            <hr />
            <CapacityBlock />
            <hr />
            <div className="price">
              <button>Add to cart</button>
            </div>
            <div className="item--tech-spec">
              <div className="item--tech-spec-table">
                <span>Screen</span>
                <span>{foundItem.screen}</span>
              </div>
              <div className="item--tech-spec-table">
                <span>Memory</span>
                <span>{foundItem.memory}</span>
              </div>
              <div className="item--tech-spec-table">
                <span>Ram</span>
                <span>{foundItem.ram}</span>
              </div>
              <div className="item--tech-spec-table">
                <span>Year</span>
                <span>{foundItem.year}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item--info">
        <div className="item--about">
          <h2>About</h2>
          <hr />
          <h3>And then there was Pro</h3>
          <p>
            A transformative triple‑camera system that
            adds tons of capability without complexity.
            An unprecedented leap in battery life. And a mind‑blowing chip that
            doubles down on machine learning and pushes the boundaries of what
            a smartphone can do. Welcome to the first iPhone powerful enough
            to be called Pro.
          </p>

          <h3>Camera</h3>
          <p>
            Meet the first triple‑camera system to combine cutting‑edge
            technology with the legendary simplicity of iPhone.
            Capture up to four times more scene. Get beautiful images
            in drastically lower light. Shoot the highest‑quality video in
            a smartphone — then edit with the same tools you love for photos.
            You’ve never shot with anything like it.
          </p>

          <h3>
            Shoot it. Flip it. Zoom it. Crop it.
            Cut it. Light it. Tweak it. Love it.
          </h3>
          <p>
            iPhone 11 Pro lets you capture videos that are beautifully true
            to life, with greater detail and smoother motion. Epic processing
            power means it can shoot 4K video with extended dynamic range and
            cinematic video stabilization — all at 60 fps. You get more
            creative control, too, with four times more scene and
            powerful new editing tools to play with.
          </p>
        </div>
        <div className="item--tech-spec">
          <h2>Tech specs</h2>
          <hr />
          <div className="item--tech-spec-table">
            <span>Screen</span>
            <span>{foundItem.screen}</span>
          </div>
          <div className="item--tech-spec-table">
            <span>Memory</span>
            <span>{foundItem.memory}</span>
          </div>
          <div className="item--tech-spec-table">
            <span>Ram</span>
            <span>{foundItem.ram}</span>
          </div>
          <div className="item--tech-spec-table">
            <span>Year</span>
            <span>{foundItem.year}</span>
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
            <PhoneCard phone={foundItem} />
            <PhoneCard phone={foundItem} />
            <PhoneCard phone={foundItem} />
            <PhoneCard phone={foundItem} />
            {/* <PhoneCard phone={foundItem} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
