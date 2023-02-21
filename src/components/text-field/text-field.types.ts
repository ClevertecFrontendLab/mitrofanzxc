export type TIdTextField =
  | 'login'
  | 'password'
  | 'firstName'
  | 'lastName'
  | 'phone'
  | 'email'
  | 'contractNumber'
  | 'contractOwner';

export type TTextField = {
  type: string;
  id: TIdTextField;
  placeholder: string;
  message?: string;
};
