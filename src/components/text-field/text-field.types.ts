export enum ETextFieldType {
  Text = 'text',
  Password = 'password',
  Tel = 'tel',
  Email = 'email',
}

export enum ETextFieldId {
  Login = 'login',
  Phone = 'phone',
  Email = 'email',
  Password = 'password',
  FirstName = 'firstName',
  LastName = 'lastName',
  ContractNumber = 'contractNumber',
  ContractOwner = 'contractOwner',
}

export type TTextField = {
  type: ETextFieldType;
  id: ETextFieldId;
  placeholder: string;
  message?: string;
};
