import { FC } from 'react';
import classNames from 'classnames';

import { IButtonPrimary } from './button-primary.interface';

import './button-primary.scss';

export const ButtonPrimary: FC<IButtonPrimary> = ({ type, title, className, disabled, onClick, dataTestId }) => {
  const buttonPrimaryClass = classNames('button', {
    'button-primary': type === 'primary',
    'button-secondary': type !== 'primary',
  });

  return (
    <button
      className={`${buttonPrimaryClass} ${className || ''}`}
      type='button'
      disabled={disabled || false}
      onClick={onClick}
      data-test-id={dataTestId}
    >
      {title}
    </button>
  );
};
