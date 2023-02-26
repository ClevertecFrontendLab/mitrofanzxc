import { EDate, TConvertToDate } from './utils.types';

export const convertToDate: TConvertToDate = (timestamp, type) => {
  switch (type) {
    case EDate.Full:
      return new Date(timestamp).toLocaleString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    case EDate.Short:
      return new Date(timestamp).toLocaleString('ru-RU', {
        month: 'numeric',
        day: 'numeric',
      });
    default:
      return new Date(Date.now()).toLocaleString('ru-RU', {
        month: 'numeric',
        day: 'numeric',
      });
  }
};
