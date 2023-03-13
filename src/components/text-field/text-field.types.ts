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
  CreateUserNameLatinAlphabet = 'латинский алфавит',
  CreateUserNameDigits = 'цифры',
  Password = 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
  PasswordCharaters = 'не менее 8 символов',
  PasswordCapitalLetter = 'заглавной буквой',
  PasswordDigit = 'цифрой',
  PasswordMismatch = 'Пароли не совпадают',
  Phone = 'В формате +375 (xx) xxx-xx-xx',
  Email = 'На это email будет отправлено письмо с инструкциями по восстановлению пароля',
  EmailError = 'Введите корректный e-mail',
  EmptyField = 'Поле не может быть пустым',
  Error = 'error',
  WrongLoginOrPassword = 'Неверный логин или пароль!',
}

export type FormTextField = {
  email?: string;
  username?: string;
  identifier?: string;
  password?: string;
  passwordConfirmation?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  contractNumber?: string;
  contractOwner?: string;
};
