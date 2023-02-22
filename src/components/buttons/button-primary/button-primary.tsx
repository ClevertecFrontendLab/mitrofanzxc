import { FC } from 'react';
import classNames from 'classnames';

import { EButtonPrimaryType, TButtonPrimary } from './button-primary.types';

import './button-primary.scss';

export const ButtonPrimary: FC<TButtonPrimary> = ({
  type,
  title,
  untilDate,
  className,
  disabled,
  onClick,
  dataTestId,
}) => {
  const buttonPrimaryClass = classNames('button', {
    'button-primary': type === EButtonPrimaryType.Primary,
    'button-secondary': type !== EButtonPrimaryType.Primary,
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
      {untilDate && <span>{` ${untilDate}`}</span>}
    </button>
  );
};
