import { LocalStorage } from 'constants/local-storage';

export const removeFromLocalStorage = (key: LocalStorage) => {
  localStorage.removeItem(key);
};
