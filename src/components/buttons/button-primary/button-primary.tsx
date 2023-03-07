import { StringAble } from 'constants/constants.types';
import { DataTestId } from 'constants/data-test-id';

import { FC, Fragment } from 'react';
import classNames from 'classnames';

import { ButtonPrimaryTitle, ButtonPrimaryType } from './button-primary.types';

import './button-primary.scss';

export type ButtonPrimaryProps = {
  type: ButtonPrimaryType;
  title: ButtonPrimaryTitle;
  untilDate?: StringAble;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  dataTestId?: DataTestId;
};

export const ButtonPrimary: FC<ButtonPrimaryProps> = ({
  type,
  title,
  untilDate,
  className,
  disabled,
  onClick,
  dataTestId,
}) => {
  const buttonPrimaryClass = classNames('button', {
    'button-primary': type === ButtonPrimaryType.Primary || type === ButtonPrimaryType.Submit,
    'button-secondary': type === ButtonPrimaryType.Secondary,
  });

  return (
    <Fragment>
      {(type === ButtonPrimaryType.Primary || type === ButtonPrimaryType.Secondary) && (
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
      )}
      {type === ButtonPrimaryType.Submit && (
        <button className={buttonPrimaryClass} type='submit' disabled={disabled || false}>
          {title}
        </button>
      )}
    </Fragment>
  );
};
