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

export enum ETextFieldPlaceholder {
  CreateUserName = 'Придумайте логин для входа',
  Password = 'Пароль',
  FirstName = 'Имя',
  LastName = 'Фамилия',
  Email = 'E-mail',
  Login = 'Логин',
  NewPassword = 'Новый пароль',
  RepeatPassword = 'Повторите пароль',
  Tel = 'Номер телефона',
  ContractOwner = 'Оформлен на',
  ContractNumber = 'Номер договора',
}

export enum ETextFieldMessage {
  CreateUserName = 'Используйте для логина латинский алфавит и цифры',
  Password = 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
  Tel = 'В формате +375 (xx) xxx-xx-xx',
  Email = 'На это email будет отправлено письмо с инструкциями по восстановлению пароля',
}

export type TTextField = {
  type: ETextFieldType;
  id: ETextFieldId;
  placeholder: ETextFieldPlaceholder;
  message?: ETextFieldMessage;
};
