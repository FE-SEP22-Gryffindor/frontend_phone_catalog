import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartCard } from '../../components/CartCard';
import './CartPage.scss';
import {
  CartAndFavContext,
} from '../../components/CartAndFavContext/CartAndFavContext';

export const CartPage = () => {
  const { CartList } = useContext(CartAndFavContext);
  const [totalAmount, setTotalAmount] = useState(CartList.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue.price),
    0,
  ));

  const total = CartList.length;

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
          <button className='btn-checkout'>Checkout</button>
        </div>
      </div>
    </div>
  );
};
