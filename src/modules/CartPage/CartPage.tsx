/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { Modal } from '../../components/Modal';
// import { Link } from 'react-router-dom';
import './CartPage.scss';

// type Item = {
//   id: number,
//   img: string,
//   title: string,
//   price: number,
// }

const items = [
  {
    id: 1,
    img: 'link',
    title: 'title',
    price: 1999,
  },
  {
    id: 2,
    img: 'link',
    title: 'title',
    price: 1999,
  },
  {
    id: 3,
    img: 'link',
    title: 'title',
    price: 1999,
  },
];

const sum = items.reduce(
  (accumulator, currentValue) => accumulator + currentValue.price,
  0,
);

const total = items.length;

export const CartPage = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [isYes, setIsYes] = useState(false);

  return (
    <div className="container-card-page">
      <div className="breadcrumbs">
        {/* <Link to='/' className="back">Back</Link> */}
        <a
          className="back"
          onClick={(event) => {
            event.preventDefault();
            history.back();
          }}
        >
          Back
        </a>
      </div>
      <div>
        <h1 className="title">Cart page</h1>
      </div>
      <div className="cart-form">
        <div className="cart-items">
          {items.map((item) => (
            <div className="cart-item" key={item.id}>
              <h2>{item.title}</h2>
            </div>
          ))}
        </div>

        <div className="cart-total">
          <h2 className="total-amount">${sum}</h2>
          <p className="total-items">Total for {total} items</p>
          <hr className="total-hr" />
          <button
            className="btn-checkout"
            onClick={() => {
              setIsModalShown(true);
              setIsYes(false);
            }}
          >
            Checkout
          </button>
        </div>
      </div>
      <Modal
        isShown={isModalShown}
        onModalShown={setIsModalShown}
        isYes={isYes}
        onAnswer={setIsYes}
      />
    </div>
  );
};
