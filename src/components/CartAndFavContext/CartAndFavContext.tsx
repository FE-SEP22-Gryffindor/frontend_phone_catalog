/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react';
import { Phone } from '../../types/Phone';

interface ContextValues {
  CartList: Phone[];
  setCartList: React.Dispatch<React.SetStateAction<Phone[]>>;
  FavtList: Phone[];
  setFavList: React.Dispatch<React.SetStateAction<Phone[]>>;
}

export const CartAndFavContext = React.createContext<ContextValues>({
  CartList: [],
  setCartList: () => {},
  FavtList: [],
  setFavList: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const CartAndFavProvider: React.FC<Props> = ({ children }) => {
  const getCartStorage = JSON.parse(localStorage.getItem('cart') || '[]');
  const [CartList, setCartList] = useState<Phone[]>(getCartStorage);

  const getFavStorage = JSON.parse(localStorage.getItem('favorites') || '[]');
  const [FavtList, setFavList] = useState<Phone[]>(getFavStorage);

  const contextValue = {
    CartList,
    setCartList,
    FavtList,
    setFavList,
  };

  return (
    <CartAndFavContext.Provider value={contextValue}>
      {children}
    </CartAndFavContext.Provider>
  );
};
