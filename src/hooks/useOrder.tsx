import { useContext, useEffect, useMemo } from 'react';
import { OrderContext } from '../providers/OrderProvider';
import useStateWithStorage from './useStateWithStorage';

const useOrder = () => {
  const context = useContext(OrderContext);

  if (context === undefined) {
    throw new Error('Order Context must be initialized');
  }

  const { setSubTotal: setSubTotalContext, setOrderCode: setOrderCodeContext } =
    context;
  const subTotalContext = useMemo(() => context?.subTotal, [context?.subTotal]);
  const orderCodeContext = useMemo(
    () => context?.orderCode,
    [context?.orderCode]
  );

  // Keep the local storage in sync
  const [subTotal, setSubTotal] = useStateWithStorage('subTotal', 0);
  const [orderCode, setOrderCode] = useStateWithStorage('orderCode', null);
  useEffect(() => {
    // If there is a subTotal in the local storage and subTotal of the context has an initial value ( '0' ),
    // update the subTotal of the context to keep them synchronized.
    if (!!subTotal && subTotalContext === 0) {
      setSubTotalContext(subTotal);
    }
    // Same behavior for orderCode
    if (!!orderCode && orderCodeContext === null) {
      setOrderCodeContext(orderCode);
    }
    // If the context subTotal does not have an initial value (items are added to the order),
    // update the subTotal of the local storage to keep them synchronized.
    else if (!!subTotalContext || !!orderCodeContext) {
      if (!!subTotalContext) setSubTotal(subTotalContext);
      if (!!orderCodeContext) setOrderCode(orderCodeContext);
    }
  }, [subTotalContext, subTotal, orderCodeContext]);

  return context;
};

export default useOrder;
