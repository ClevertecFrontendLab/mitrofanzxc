import { IConvertToDate } from './utils.interface';

export const convertToDate: IConvertToDate = (timestamp, type) => {
  switch (type) {
    case 'full':
      return new Date(timestamp).toLocaleString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    case 'short':
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
