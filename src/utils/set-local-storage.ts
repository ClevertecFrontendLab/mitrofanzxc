import { LocalStorage } from 'constants/local-storage';

export const setLocalStorage = (key: LocalStorage, value: string) => {
  localStorage.setItem(key, value);
};
