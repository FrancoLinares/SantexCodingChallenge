import React, { useState } from 'react';
import { createContext } from 'react';
import { addItemToOrder_addItemToOrder_Order_lines } from '../graphql/__generated__/addItemToOrder';

export type OrderType = {
  subTotal: number;
  cartItems: addItemToOrder_addItemToOrder_Order_lines[];
  orderCode: string | null;
  setSubTotal: React.Dispatch<React.SetStateAction<OrderType['subTotal']>>;
  setCartItems: React.Dispatch<React.SetStateAction<OrderType['cartItems']>>;
  setOrderCode: React.Dispatch<React.SetStateAction<OrderType['orderCode']>>;
};

export const OrderContext = createContext<OrderType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [subTotal, setSubTotal] = useState<OrderType['subTotal']>(0);
  const [cartItems, setCartItems] = useState<OrderType['cartItems']>([]);
  const [orderCode, setOrderCode] = useState<OrderType['orderCode']>(null);

  const context = {
    subTotal,
    cartItems,
    orderCode,
    setSubTotal,
    setCartItems,
    setOrderCode,
  };

  return (
    <OrderContext.Provider value={context}>{children}</OrderContext.Provider>
  );
};
