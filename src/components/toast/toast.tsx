import { DataTestId } from 'constants/data-test-id';

import { FC } from 'react';
import classNames from 'classnames';
import { Sprite } from 'components';
import { SpriteId } from 'components/sprite/sprite.types';
import { useAppDispatch, useAppSelector } from 'hooks';
import { toastSelector } from 'store/selectors';
import { closeToast } from 'store/slices';

import { ToastType } from './toast.types';

import './toast.scss';

export type ToastProps = {
  dataTestId: DataTestId;
};

export const Toast: FC<ToastProps> = ({ dataTestId }) => {
  const { isToastOpen, toastType, toastMessage } = useAppSelector(toastSelector);
  const dispatch = useAppDispatch();

  const handleToast = () => {
    dispatch(closeToast());
  };

  const toastClass = classNames('toast', {
    toast_error: toastType === ToastType.Error,
    toast_success: toastType === ToastType.Success,
    toast_active: isToastOpen,
  });

  return (
    <div className={toastClass} data-test-id={dataTestId}>
      <div className='toast__wrapper'>
        <div className='toast__wrapper'>
          <Sprite id={toastType === ToastType.Error ? SpriteId.Warning : SpriteId.Success} className='toast__logo' />
          <p className='subtitle_large'>{toastMessage}</p>
        </div>
        <Sprite id={SpriteId.Close} className='toast__logo' onClick={handleToast} />
      </div>
    </div>
  );
};
