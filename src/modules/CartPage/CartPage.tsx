/* eslint-disable no-shadow */
import React, { useContext, useState } from 'react';
import { Modal } from '../../components/Modal';
import { CartCard } from '../../components/CartCard';
// import { Link } from 'react-router-dom';

import './CartPage.scss';
import {
  CartAndFavContext,
} from '../../components/CartAndFavContext/CartAndFavContext';


export const CartPage = () => {
  const { CartList } = useContext(CartAndFavContext);
  const [isModalShown, setIsModalShown] = useState(false);
  const [isYes, setIsYes] = useState(false);
  const [totalAmount, setTotalAmount] = useState(CartList.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue.price),
    0,
  ));

  const total = CartList.length;

  return (
    <div className="container-card-page">
      <div className="breadcrumbs">
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
      <div className='cart-form'>
        <div className='cart-items'>
          {CartList.map(item => (
            <CartCard
              key={item.slug}
              card={item}
              setTotalAmount={setTotalAmount} />
          ))}
        </div>

        <div className='cart-total'>
          <h2 className='total-amount'>${totalAmount}</h2>
          <p className='total-items'>Total for {total} items</p>
          <hr className='total-hr' />
          <button 
            className='btn-checkout'
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
