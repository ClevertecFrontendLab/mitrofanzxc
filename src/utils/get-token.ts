import { LocalStorage } from 'constants/local-storage';

export const getToken = () => {
  const data = localStorage.getItem(LocalStorage.Token);

  if (data) {
    return data;
  }

  return null;
};
