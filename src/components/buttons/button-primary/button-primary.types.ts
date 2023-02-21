import { MouseEvent } from 'react';

export type TButtonPrimaryType = 'primary' | 'secondary';

export type TButtonPrimary = {
  type: TButtonPrimaryType;
  title: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void | ((event: MouseEvent<HTMLButtonElement>) => void) | ((state: boolean) => void);
  dataTestId?: string;
};
