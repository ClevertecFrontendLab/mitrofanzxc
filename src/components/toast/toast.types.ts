export enum ToastType {
  Error = 'error',
  Success = 'success',
  Registration = 'registration',
}

export enum ToastMessage {
  ConnectionError = 'Что-то пошло не так. Обновите страницу через некоторое время.',
  ChangesError = 'Изменения не были сохранены. Попробуйте позже!',
  ChangesSuccess = 'Изменения успешно сохранены!',
  DefaultError = 'Изменения не были сохранены. Попробуйте позже!',
  DefaultSuccess = 'Изменения успешно сохранены!',
  RatingError = 'Оценка не была отправлена. Попробуйте позже!',
  RatingSuccess = 'Спасибо, что нашли время оценить книгу!',
}
