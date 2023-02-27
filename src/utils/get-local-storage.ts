export const getLocalStorage = <T>(key: string): T | null => {
  const data: string | null = localStorage.getItem(key) || null;

  if (data) {
    return JSON.parse(data) as T;
  }

  return null;
};
