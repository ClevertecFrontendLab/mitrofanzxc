import { LocalStorage } from 'constants/local-storage';

export const getLocalStorage = <T>(key: LocalStorage): T | null => {
  const data: string | null = localStorage.getItem(key) || null;

  if (data) {
    return JSON.parse(data) as T;
  }

  return null;
};
