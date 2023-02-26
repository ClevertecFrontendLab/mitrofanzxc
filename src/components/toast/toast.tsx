import { FC } from 'react';
import classNames from 'classnames';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { closeToast } from '../../store/slices';
import { ESpriteId } from '../sprite/sprite.types';
import { Sprite } from '..';

import { EToastType, TToast } from './toast.types';

import './toast.scss';

export const Toast: FC<TToast> = ({ dataTestId }) => {
  const { isToastOpen, toastType, toastMessage } = useAppSelector((state) => state.toast);
  const dispatch = useAppDispatch();

  const handleToast = () => {
    dispatch(closeToast());
  };

  const toastClass = classNames('toast', {
    toast_error: toastType === EToastType.Error,
    toast_success: toastType === EToastType.Success,
    toast_active: isToastOpen,
  });

  return (
    <div className={toastClass} data-test-id={dataTestId}>
      <div className='toast__wrapper'>
        <div className='toast__wrapper'>
          <Sprite id={toastType === EToastType.Error ? ESpriteId.Warning : ESpriteId.Success} className='toast__logo' />
          <p className='subtitle_large'>{toastMessage}</p>
        </div>
        <Sprite id={ESpriteId.Close} className='toast__logo' onClick={handleToast} />
      </div>
    </div>
  );
};
