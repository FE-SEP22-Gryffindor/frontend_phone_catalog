/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useState } from 'react';
import { CartCardItem } from '../../types/CartCardItem';
import { Phone } from '../../types/Phone';

interface ContextValues {
  cartList: CartCardItem[];
  setCartList: React.Dispatch<React.SetStateAction<CartCardItem[]>>;
  favtList: Phone[];
  setFavList: React.Dispatch<React.SetStateAction<Phone[]>>;
}

export const CartAndFavContext = React.createContext<ContextValues>({
  cartList: [],
  setCartList: () => {},
  favtList: [],
  setFavList: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const CartAndFavProvider: React.FC<Props> = ({ children }) => {
  const getCartStorage = JSON.parse(localStorage.getItem('cart') || '[]');
  const [cartList, setCartList] = useState<CartCardItem[]>(getCartStorage);

  const getFavStorage = JSON.parse(localStorage.getItem('favorites') || '[]');
  const [favtList, setFavList] = useState<Phone[]>(getFavStorage);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartList));
  }, [cartList]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favtList));
  }, [favtList]);

  const contextValue = {
    cartList,
    setCartList,
    favtList,
    setFavList,
  };

  return (
    <CartAndFavContext.Provider value={contextValue}>
      {children}
    </CartAndFavContext.Provider>
  );
};
