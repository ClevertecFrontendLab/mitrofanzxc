export enum TextFieldType {
  Text = 'text',
  Password = 'password',
  Tel = 'tel',
  Email = 'email',
}

export enum TextFieldId {
  Email = 'email',
  Username = 'username',
  Identifier = 'identifier',
  Password = 'password',
  PasswordConfirmation = 'passwordConfirmation',
  FirstName = 'firstName',
  LastName = 'lastName',
  Phone = 'phone',
  ContractNumber = 'contractNumber',
  ContractOwner = 'contractOwner',
}

export enum TextFieldPlaceholder {
  CreateUserName = 'Придумайте логин для входа',
  Password = 'Пароль',
  FirstName = 'Имя',
  LastName = 'Фамилия',
  Email = 'E-mail',
  Login = 'Логин',
  NewPassword = 'Новый пароль',
  RepeatPassword = 'Повторите пароль',
  Phone = 'Номер телефона',
  ContractOwner = 'Оформлен на',
  ContractNumber = 'Номер договора',
}

export enum TextFieldMessage {
  CreateUserName = 'Используйте для логина латинский алфавит и цифры',
  Password = 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
  Phone = 'В формате +375 (xx) xxx-xx-xx',
  Email = 'На это email будет отправлено письмо с инструкциями по восстановлению пароля',
}

export type FormTextField = {
  email: string;
  username: string;
  identifier: string;
  password: string;
  passwordConfirmation: string;
  firstName: string;
  lastName: string;
  phone: string;
  contractNumber: string;
  contractOwner: string;
};

export type FormAuthorizationValues = {
  firstName: string;
  password: string;
};

export type FormRegistrationValues = {
  firstName: string;
  password: string;
};

export type FormForgotPassValues = {
  firstName: string;
  password: string;
};

// export type FormValues = {
//   email: 'email';
//   username: 'username';
//   identifier: 'identifier';
//   password: 'password';
//   passwordConfirmation: 'passwordConfirmation';
//   firstName: 'firstName';
//   lastName: 'lastName';
//   phone: 'phone';
//   contractNumber: 'contractNumber';
//   contractOwner: 'contractOwner';
// };
