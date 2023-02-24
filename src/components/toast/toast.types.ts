export enum EToastType {
  Error = 'error',
  Success = 'success',
}

export enum EToastMessage {
  ConnectionError = 'Что-то пошло не так. Обновите страницу через некоторое время.',
  ChangesError = 'Изменения не были сохранены. Попробуйте позже!',
  ChangesSuccess = 'Изменения успешно сохранены!',
  DefaultError = 'Изменения не были сохранены. Попробуйте позже!',
  DefaultSuccess = 'Изменения успешно сохранены!',
  RatingError = 'Оценка не была отправлена. Попробуйте позже!',
  RatingSuccess = 'Спасибо, что нашли время оценить книгу!',
}

export type TToast = {
  dataTestId: string;
};
