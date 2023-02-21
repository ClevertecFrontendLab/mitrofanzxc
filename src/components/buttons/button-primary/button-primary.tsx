import { FC } from 'react';
import classNames from 'classnames';

import { TButtonPrimary } from './button-primary.types';

import './button-primary.scss';

export const ButtonPrimary: FC<TButtonPrimary> = ({ type, title, className, disabled, onClick, dataTestId }) => {
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
