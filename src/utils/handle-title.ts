import { THandleTitle } from './utils.types';

export const handleTitle: THandleTitle = (value, limeter) => {
  if (value && value.length > limeter) {
    return `${value.slice(0, limeter)}...`;
  }

  if (!value || !value.length) {
    return 'Empty title...';
  }

  return value;
};
