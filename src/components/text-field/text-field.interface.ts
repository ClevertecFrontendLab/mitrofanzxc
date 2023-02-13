export type TIdTextField =
  | 'login'
  | 'password'
  | 'firstName'
  | 'lastName'
  | 'phone'
  | 'email'
  | 'contractNumber'
  | 'contractOwner';

export interface ITextField {
  type: string;
  id: TIdTextField;
  placeholder: string;
  message?: string;
}
