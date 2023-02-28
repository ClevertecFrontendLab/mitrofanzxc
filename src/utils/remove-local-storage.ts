import { LocalStorage } from 'constants/local-storage';

export const removeLocalStorage = (key: LocalStorage) => {
  localStorage.removeItem(key);
};
