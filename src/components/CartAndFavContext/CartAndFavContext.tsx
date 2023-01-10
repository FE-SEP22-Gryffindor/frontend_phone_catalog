/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useState } from 'react';
import { Phone } from '../../types/Phone';

interface ContextValues {
  cartList: Phone[];
  setCartList: React.Dispatch<React.SetStateAction<Phone[]>>;
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
  const [cartList, setCartList] = useState<Phone[]>(getCartStorage);

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
