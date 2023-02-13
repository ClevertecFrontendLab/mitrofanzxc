import { FC } from 'react';

import { IButtonPrimary } from './button-primary.interface';

import './button-primary.scss';

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
