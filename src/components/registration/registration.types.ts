export type FormTextField = {
  login: string;
  password: string;
  firstName: string;
  lastName: string;
  tel: string;
  email: string;
  newPassword: string;
  repeatNewPassword: string;
};

export type FormValues = {
  login: 'login';
  password: 'password';
  firstName: 'firstName';
  lastName: 'lastName';
  email: 'email';
  tel: 'tel';
  contractNumber: 'contractNumber';
  contractOwner: 'contractOwner';
  newPassword: 'newPassword';
  repeatNewPassword: 'repeatNewPassword';
};
