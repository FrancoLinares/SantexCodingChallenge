import React from 'react';
import { cleanup, renderHook } from '@testing-library/react-hooks';
import useOrder from '../useOrder';
import { OrderContext, OrderProvider } from '../../providers/OrderProvider';

const mockedSetState = jest.fn();

const subTotalMock = '10';

jest.mock('../useStateWithStorage', () => ({
  __esModule: true,
  default: () => [subTotalMock, mockedSetState],
}));

describe('useOrder Hook', () => {
  let mockSetSubTotal = jest.fn();

  afterEach(() => {
    jest.resetAllMocks();

    cleanup();
  });

  const renderUseOrderHookContextMocked = ({
    subTotal = 0,
    setSubTotal,
    orderCode = null,
  }: {
    subTotal?: number;
    setSubTotal?: any;
    orderCode?: string | null;
  }) => {
    let mockContext = {
      subTotal,
      setSubTotal: setSubTotal || mockSetSubTotal,
      cartItems: [],
      setCartItems: jest.fn(),
      orderCode,
      setOrderCode: jest.fn(),
    };

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <OrderContext.Provider value={mockContext}>
        {children}
      </OrderContext.Provider>
    );

    return renderHook(() => useOrder(), { wrapper });
  };

  const renderUseOrderHook = () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <OrderProvider>{children}</OrderProvider>
    );

    return renderHook(() => useOrder(), { wrapper });
  };

  it('should return error when context is not initialized', () => {
    const {
      result: { error },
    } = renderHook(() => useOrder());
    expect(error?.message).toEqual('Order Context must be initialized');
  });

  it('should update the context state when subTotal from localStorage exist and context subTotal is default value', () => {
    const {
      result: {
        current: { subTotal, orderCode },
      },
    } = renderUseOrderHook();

    expect(subTotal).toBe(subTotalMock);
    // For the propose of this test, useStateWithStorage won't be mocked again with more specific data
    expect(orderCode).toBe(subTotalMock);
  });

  it('should update the localStorage state when subTotal from context changes', () => {
    renderUseOrderHookContextMocked({ subTotal: 20, orderCode: '123' });

    // Called for subTotal
    expect(mockedSetState).toHaveBeenCalledWith(20);
    // Called for orderCode
    expect(mockedSetState).toHaveBeenCalledWith('123');
  });
});
