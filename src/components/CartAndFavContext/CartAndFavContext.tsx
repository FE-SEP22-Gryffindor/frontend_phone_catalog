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
  const [CartList, setCartList] = useState<Phone[]>([]);
  const [FavtList, setFavList] = useState<Phone[]>([]);

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