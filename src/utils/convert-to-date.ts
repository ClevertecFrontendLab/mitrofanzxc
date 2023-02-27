import { DateType } from './utils.types';

export const convertToDate = (timestamp: string, type: DateType): string => {
  switch (type) {
    case DateType.Full:
      return new Date(timestamp).toLocaleString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    case DateType.Short:
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
