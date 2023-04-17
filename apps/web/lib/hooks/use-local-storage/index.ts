import { useCallback } from "react";

export const useLocalStorage = <T = Record<string, unknown>>() => {
  const getValue = useCallback((key: string): T | null => {
    try {
      const value = window.localStorage.getItem(key);

      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }, []);

  const setValue = useCallback((key: string, value: T) => {
    try {
      const string = JSON.stringify(value);

      window.localStorage.setItem(key, string);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { getValue, setValue };
};
