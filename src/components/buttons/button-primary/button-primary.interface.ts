import { MouseEvent } from 'react';

export type TButtonPrimary = 'primary' | 'secondary';

export interface IButtonPrimary {
  type: TButtonPrimary;
  title: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void | ((event: MouseEvent<HTMLButtonElement>) => void);
  dataTestId?: string;
}
