import { IHandleTitle } from './utils.interface';

export const handleTitle: IHandleTitle = (value, limeter) => {
  if (value && value.length > limeter) {
    return `${value.slice(0, limeter)}...`;
  }

  if (!value || !value.length) {
    return 'Empty title...';
  }

  return value;
};
