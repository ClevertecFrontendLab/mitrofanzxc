export const setToken = async (token: string) => {
  try {
    await localStorage.setItem('token', token);
  } catch (error) {
    console.log('AsyncStorage error during token store:', error);
  }
};
