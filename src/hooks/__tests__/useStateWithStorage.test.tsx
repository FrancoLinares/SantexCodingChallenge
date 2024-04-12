import { renderHook } from '@testing-library/react-hooks';
import useStateWithStorage from '../useStateWithStorage';
import { act, cleanup } from '@testing-library/react';

const { key, value } = {
  key: 'subTotal',
  value: 5000,
};

Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: jest.fn(() => null),
    setItem: jest.fn(() => null),
  },
});

describe('useStateWithStorage Hook', () => {
  afterEach(() => {
    cleanup();
  });

  const renderUseStateWithStorageHook = (key: string, value: number) =>
    renderHook(() => useStateWithStorage(key, value));

  it('should save initial value and provide state and setState', () => {
    const {
      result: {
        current: [subTotal, setSubTotal],
      },
    } = renderUseStateWithStorageHook(key, value);
    expect(subTotal).toBe(value);
    expect(typeof setSubTotal).toBe('function');
  });

  it('should call getItem from localStorage on initial render', () => {
    jest.spyOn(localStorage, 'getItem');

    renderUseStateWithStorageHook(key, value);

    expect(localStorage.getItem).toHaveBeenCalledWith(key);
    expect(localStorage.setItem).not.toHaveBeenCalledWith(key);
  });

  it('should call setItem from localStorage on state change', () => {
    jest.spyOn(localStorage, 'setItem');

    const {
      result: {
        current: [, setSubTotal],
      },
    } = renderUseStateWithStorageHook(key, value);

    act(() => setSubTotal(1000));

    expect(localStorage.setItem).toHaveBeenCalledWith(key, '1000');
  });
});
