import { MouseEvent } from 'react';

import { TStringAble } from '../../../constants/constants.types';

export enum EButtonPrimaryType {
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum EButtonPrimaryTitle {
  Book = 'Забронировать',
  Booked = 'Забронирована',
  BusyUntil = 'Занята до',
  RateTheBook = 'Оценить книгу',
  Rate = 'Оценить',
  Entrance = 'Вход',
  NextStep = 'Следующий шаг',
  LastStep = 'Последний шаг',
  Restore = 'Восстановить',
  Edit = 'Редактировать',
  ViewContract = 'Посмотреть договор',
  SaveChanges = 'Сохранить изменения',
  Register = 'Зарегистрироваться',
}

export type TButtonPrimary = {
  type: EButtonPrimaryType;
  title: EButtonPrimaryTitle;
  untilDate?: TStringAble;
  className?: string;
  disabled?: boolean;
  onClick?: () => void | ((event: MouseEvent<HTMLButtonElement>) => void) | ((state: boolean) => void);
  dataTestId?: string;
};
