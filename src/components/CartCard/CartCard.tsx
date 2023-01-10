import React, { useContext, useState } from 'react';
import closeIcon from '../../img/CloseForCart.svg';
import minusIcon from '../../img/Minus.svg';
import PlusIcon from '../../img/Plus.svg';
import './CartCard.scss';
// import { Phone } from '../../types/Phone';
import { CartCardItem } from '../../types/CartCardItem';
import { CartAndFavContext } from '../CartAndFavContext';

interface Props {
  // card: Phone
  card: CartCardItem
  setTotalAmount: React.Dispatch<React.SetStateAction<number>>
}

export const CartCard: React.FC<Props> = ({ card, setTotalAmount }) => {
  const [counterOfItetms, setCounterOfItetms] = useState(1);

  const totalAmountOfCard = card.phone.price * counterOfItetms;

  const { setCartList, cartList }
    = useContext(CartAndFavContext);

  const handleDeleteButton = () => {
    const filteredStorage = cartList
      .filter((item) => item.phone.slug !== card.phone.slug);

    setCartList(filteredStorage);
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
            onClick={() => {
              setCounterOfItetms(prevState => prevState - 1);
              setTotalAmount(prevState => prevState - Number(card.phone.price));
            }}
            className='cart__button cart__button__minus'
            disabled={counterOfItetms <= 1}
          >

            <img
              className='cart__button__icon'
              src={minusIcon}
              alt="minus"
            />
          </button>

          <p>{`${counterOfItetms}`}</p>

          <button
            onClick={() => {
              setCounterOfItetms(prevState => prevState + 1);
              setTotalAmount(prevState => prevState + Number(card.phone.price));
            }}
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
