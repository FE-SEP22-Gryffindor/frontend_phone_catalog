/* eslint-disable no-shadow */
import React, { useContext, useState } from 'react';
import { Modal } from '../../components/Modal';
import { CartCard } from '../../components/CartCard';
import './CartPage.scss';
import { CartAndFavContext } from '../../components/CartAndFavContext';

import cartIsEmptyPicture from '../../img/cartIsEmpty.png';
import { Link } from 'react-router-dom';

export const CartPage = () => {
  const { cartList } = useContext(CartAndFavContext);
  const [isModalShown, setIsModalShown] = useState(false);
  const [totalAmount, setTotalAmount] = useState(cartList.reduce(
    (accumulator, currentValue) => (
      accumulator + Number(currentValue.phone.price) * currentValue.quantity
    ), 0,
  ));

  const totalQuantity = cartList
    .reduce((prev, current) => prev + current.quantity, 0);

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

      {cartList.length
        ? (
          <>
            <div>
              <h1 className="title">Cart page</h1>
            </div>
            <div className='cart-form'>
              <div className='cart-items'>
                {cartList.map(item => (
                  <CartCard
                    key={item.phone.slug}
                    card={item}
                    setTotalAmount={setTotalAmount} />
                ))}
              </div>

              <div className='cart-total'>
                <h2 className='total-amount'>${totalAmount}</h2>
                <p className='total-items'>Total for {totalQuantity} items</p>
                <hr className='total-hr' />
                <button
                  className='btn-checkout'
                  onClick={() => {
                    setIsModalShown(true);
                  }}
                >
                  Checkout
                </button>
              </div>
            </div>
            <Modal
              isShown={isModalShown}
              onModalShown={setIsModalShown}
            />
          </>
        ) : (
          <div className='card-is-empty'>
            <img
              className='card-is-empty__picture'
              src={cartIsEmptyPicture}
              alt="EmptyCard"
            />

            <h1 className='card-is-empty__title'>
              Your cart is empty, pls go back and choose something :P
            </h1>

            <Link
              className='card-is-empty__link'
              to={'/'}
            >
              <button className='btn-checkout'>
                Back to Home
              </button>
            </Link>
          </div>
        )
      }
    </div>
  );
};
