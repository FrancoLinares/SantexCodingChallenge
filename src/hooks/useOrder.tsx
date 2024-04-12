import { useContext, useEffect } from 'react';
import { OrderContext } from '../providers/OrderProvider';
import useStateWithStorage from './useStateWithStorage';

export const useOrder = () => {
  const context = useContext(OrderContext);

  if (context === undefined) {
    throw new Error('Order Context must be initialized');
  }

  const { setSubTotal: setSubTotalContext } = context;

  // Keep the local storage in sync
  const [subTotal, setSubTotal] = useStateWithStorage('subTotal', 0);
  useEffect(() => {
    // If there is a subTotal in the local storage and subTotal of the context has an initial value ( '0' ),
    // update the subTotal of the context to keep them synchronized.
    if (!!subTotal && context?.subTotal === 0) {
      setSubTotalContext(subTotal);
    }
    // If the context subTotal does not have an initial value (items are added to the order),
    // update the subTotal of the local storage to keep them synchronized.
    else if (!!context?.subTotal) {
      setSubTotal(context?.subTotal);
    }
  }, [context?.subTotal, subTotal]);

  return context;
};
