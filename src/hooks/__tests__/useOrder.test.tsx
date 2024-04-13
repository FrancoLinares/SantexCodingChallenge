import React from 'react';
import { cleanup, renderHook } from '@testing-library/react-hooks';
import useOrder from '../useOrder';
import { OrderContext, OrderProvider } from '../../providers/OrderProvider';
import { act } from '@testing-library/react';

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
  }: {
    subTotal?: number;
    setSubTotal?: any;
  }) => {
    let mockContext = {
      subTotal,
      setSubTotal: setSubTotal || mockSetSubTotal,
      cartItems: [],
      setCartItems: jest.fn(),
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
        current: { subTotal },
      },
    } = renderUseOrderHook();

    act(() => expect(subTotal).toBe(subTotalMock));
  });

  it('should update the localStorage state when subTotal from context changes', () => {
    renderUseOrderHookContextMocked({ subTotal: 20 });

    expect(mockedSetState).toHaveBeenCalledWith(20);
  });
});
