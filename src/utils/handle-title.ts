import { StringAble } from 'constants/constants.types';

export const handleTitle = (value: StringAble, limeter: number): string => {
  if (value && value.length > limeter) {
    return `${value.slice(0, limeter)}...`;
  }

  if (!value || !value.length) {
    return 'Empty title...';
  }

  return value;
};
