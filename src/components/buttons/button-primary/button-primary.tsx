import { FC, MouseEvent } from 'react';

import './button-primary.scss';

export interface IButtonPrimary {
  type: 'primary' | 'secondary';
  title: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void | ((event: MouseEvent<HTMLButtonElement>) => void);
  dataTestId?: string;
}

export const ButtonPrimary: FC<IButtonPrimary> = ({ type, title, className, disabled, onClick, dataTestId }) => (
  <button
    className={`button ${type === 'primary' ? 'button-primary' : 'button-secondary'} ${className || ''}`}
    type='button'
    disabled={disabled || false}
    onClick={onClick}
    data-test-id={dataTestId}
  >
    {title}
  </button>
);
