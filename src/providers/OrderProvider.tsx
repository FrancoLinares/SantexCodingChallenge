import React, { useState } from 'react';
import { createContext } from 'react';
import { addItemToOrder_addItemToOrder_Order_lines } from '../graphql/__generated__/addItemToOrder';

export type OrderType = {
  subTotal: number;
  cartItems: addItemToOrder_addItemToOrder_Order_lines[];
  setSubTotal: React.Dispatch<React.SetStateAction<number>>;
  setCartItems: React.Dispatch<
    React.SetStateAction<addItemToOrder_addItemToOrder_Order_lines[]>
  >;
};

export const OrderContext = createContext<OrderType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [subTotal, setSubTotal] = useState<OrderType['subTotal']>(0);
  const [cartItems, setCartItems] = useState<OrderType['cartItems']>([]);

  const context = {
    subTotal,
    cartItems,
    setSubTotal,
    setCartItems,
  };

  return (
    <OrderContext.Provider value={context}>{children}</OrderContext.Provider>
  );
};
