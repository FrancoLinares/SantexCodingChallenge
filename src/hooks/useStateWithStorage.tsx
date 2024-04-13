import { useState } from 'react';

export default function useStateWithStorage(
  key: string,
  defaultValue: string | number | null
) {
  // Retrieve the state from local storage or use the initial value
  const [state, setState] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue && storedValue !== 'undefined'
        ? JSON.parse(storedValue)
        : defaultValue;
    } catch (error) {
      return defaultValue;
    }
  });

  // Update local storage whenever the state changes
  const setStoredState = (value: any) => {
    setState(value);

    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // Do something
    }
  };

  return [state, setStoredState];
}
