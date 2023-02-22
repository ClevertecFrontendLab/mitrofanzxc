export enum ETypeToastError {
  Connection = 'connection',
  Changes = 'changes',
  Default = 'default',
  Rating = 'rating',
}

export enum EToastErrorMessage {
  ConnectionFail = 'Что-то пошло не так. Обновите страницу через некоторое время.',
  ChangesFail = 'Изменения не были сохранены. Попробуйте позже!',
  ChangesSuccess = 'Изменения успешно сохранены!',
  DefaultFail = 'Изменения не были сохранены. Попробуйте позже!',
  DefaultSuccess = 'Изменения успешно сохранены!',
  RatingFail = 'Оценка не была отправлена. Попробуйте позже!',
  RatingSuccess = 'Спасибо, что нашли время оценить книгу!',
}

export type TToast = {
  isToastError: boolean;
  typeToastError: ETypeToastError;
  dataTestId: string;
};
