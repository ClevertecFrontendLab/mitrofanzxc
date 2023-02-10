export const validateTextField = (
  value: string,
  id: 'login' | 'password' | 'firstName' | 'lastName' | 'phone' | 'email' | 'contractNumber' | 'contractOwner'
): boolean => {
  const regexPhone = /^(?:\+375|375|80)\s?\(?(?:25|29|33|44)\)?\s?\d{3}\s?-?\d{2}\s?-?\d{2}/g;
  const regexEmail = /[^\s@]+@[^\s@]+\.[^\s@]+/;
  const regexLogin = /^[A-Za-z0-9]+$/;
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  switch (id) {
    case 'login':
      return regexLogin.test(value);
    case 'phone':
      return regexPhone.test(value);
    case 'email':
      return regexEmail.test(value);
    case 'password':
      return regexPassword.test(value);
    case 'contractNumber':
      return false;
    case 'contractOwner':
      return false;
    default:
      return false;
  }
};
