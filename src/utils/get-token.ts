import { LocalStorage } from 'constants/local-storage';

export const getToken = () => {
  const token = localStorage.getItem(LocalStorage.Token);

  if (token) {
    return `Bearer ${token}`;
  }

  return null;
};
