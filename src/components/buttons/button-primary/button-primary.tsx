import { StringAble } from 'constants/constants.types';
import { DataTestId } from 'constants/data-test-id';
import { Path } from 'constants/path';

import { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { ButtonPrimaryTitle, ButtonPrimaryType } from './button-primary.types';

import './button-primary.scss';

export type ButtonPrimaryProps = {
  type: ButtonPrimaryType;
  title: ButtonPrimaryTitle;
  className?: string;
  path?: Path;
  untilDate?: StringAble;
  disabled?: boolean;
  onClick?: () => void;
  dataTestId?: DataTestId;
};

export const ButtonPrimary: FC<ButtonPrimaryProps> = ({
  type,
  title,
  className,
  path,
  untilDate,
  disabled,
  onClick,
  dataTestId,
}) => {
  const buttonPrimaryClass = classNames('button', {
    'button-primary':
      type === ButtonPrimaryType.Primary || type === ButtonPrimaryType.Submit || type === ButtonPrimaryType.Link,
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
      {type === ButtonPrimaryType.Link && (
        <button className={`${buttonPrimaryClass} ${className || ''}`} type='button'>
          <Link to={path || Path.Authorization}>{title}</Link>
        </button>
      )}
    </Fragment>
  );
};
