import React, { useContext } from 'react';
import closeIcon from '../../img/CloseForCart.svg';
import minusIcon from '../../img/MinusActive.svg';
import minusIconDisabled from '../../img/Minus.svg';
import PlusIcon from '../../img/Plus.svg';
import './CartCard.scss';
import { CartCardItem } from '../../types/CartCardItem';
import { CartAndFavContext } from '../CartAndFavContext';
import classNames from 'classnames';

interface Props {
  card: CartCardItem
  setTotalAmount: React.Dispatch<React.SetStateAction<number>>
}

export const CartCard: React.FC<Props> = ({ card, setTotalAmount }) => {
  const { cartList, setCartList } = useContext(CartAndFavContext);

  const totalAmountOfCard = card.phone.price * card.quantity;

  const disabledButton = card.quantity <= 1;

  const handleMinus = () => {
    const newList = cartList.map(el => {
      if (el === card) {
        el.quantity -= 1;
      }

      return el;
    });

    setCartList(newList);
    setTotalAmount(prevState => prevState - Number(card.phone.price));
  };

  const handlePlus = () => {
    const newList = cartList.map(el => {
      if (el === card) {
        el.quantity += 1;
      }

      return el;
    });

    setCartList(newList);
    setTotalAmount(prevState => prevState + Number(card.phone.price));
  };

  const handleDeleteButton = () => {
    const filteredStorage = cartList
      .filter((item) => item.phone.slug !== card.phone.slug);

    setCartList(filteredStorage);

    setTotalAmount(prevState => (
      prevState - Number(card.phone.price) * card.quantity
    ));
  };

  return (
    <div className='cart'>
      <div className='cart__header'>
        <div className='cart__links'>
          <button
            className='cart__button__close'
            onClick={handleDeleteButton}
          >
            <img
              className='cart__closer'
              src={closeIcon}
              alt="Delete product" />
          </button>

          <img
            className='cart__picture'
            src={card.phone.image}
            alt="Product picture" />
        </div>

        <p
          className='cart__header__text'
        >
          {card.phone.name}
        </p>
      </div>
      <div className='cart__counting'>
        <div className='cart__amount'>
          <button
            onClick={handleMinus}
            className={classNames('cart__button cart__button__minus',
              { 'cart__button-disabled': disabledButton })}
            disabled={disabledButton}
          >

            <img
              className='cart__button__icon'
              src={disabledButton ? minusIconDisabled : minusIcon}
              alt="minus"
            />
          </button>

          <p>{`${card.quantity}`}</p>

          <button
            onClick={handlePlus}
            className='cart__button cart__button__plus'
          >
            <img
              className='cart__button__icon'
              src={PlusIcon}
              alt="plus"
            />
          </button>
        </div>

        <h2 className='cart__value'>
          {`$${totalAmountOfCard}`}
        </h2>
      </div>
    </div>
  );
};
