import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './CartPage.scss';
import {
  CartAndFavContext,
} from '../../components/CartAndFavContext/CartAndFavContext';

export const CartPage = () => {
  const { CartList } = useContext(CartAndFavContext);

  const total = CartList.length;

  const sum = CartList.reduce(
    (accumulator, currentValue) => accumulator + +currentValue.discountPrice,
    0,
  );

  return (
    <div className="container-card-page">
      <div className="breadcrumbs">
        <Link to="/" className="back">
          Back
        </Link>
      </div>
      <div>
        <h1 className="title">Cart page</h1>
      </div>
      <div className="cart-form">
        <div className="cart-items">
          {CartList.map((item) => (
            <div className="cart-item" key={item.slug}>
              <h2>{item.name}</h2>
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
