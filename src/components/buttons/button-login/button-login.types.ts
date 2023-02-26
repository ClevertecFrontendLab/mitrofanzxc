export enum EButtonLoginTitle {
  Enter = 'Войти',
  Registration = 'Регистрация',
  Login = 'Вход в личный кабинет',
}

export type TButtonLogin = {
  title: EButtonLoginTitle;
  onClick: () => void;
};
