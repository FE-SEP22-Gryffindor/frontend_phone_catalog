/* eslint-disable no-shadow */
import React from 'react';
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
// const back = history.back();

// console.log(back);

const total = items.length;

export const CartPage = () => {
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
          <button className="btn-checkout">Checkout</button>
        </div>
      </div>
    </div>
  );
};
