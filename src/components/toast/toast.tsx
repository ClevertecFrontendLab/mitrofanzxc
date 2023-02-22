import { FC } from 'react';
import classNames from 'classnames';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { closeToast } from '../../store/slices';
import { Sprite } from '..';

import { EToastErrorMessage, ETypeToastError, TToast } from './toast.types';

import './toast.scss';

export const Toast: FC<TToast> = ({ isToastError, typeToastError, dataTestId }) => {
  const { isToastOpen } = useAppSelector((state) => state.toast);
  const dispatch = useAppDispatch();

  const handleToast = () => {
    dispatch(closeToast());
  };

  const toastClass = classNames('toast', {
    toast_error: isToastError,
    toast_success: !isToastError,
    toast_active: isToastOpen,
  });

  return (
    <div className={toastClass} data-test-id={dataTestId}>
      <div className='toast__wrapper'>
        <div className='toast__wrapper'>
          <Sprite id={`${isToastError ? 'warning-circle-fill' : 'check-circle-fill'}`} className='toast__logo' />
          <p className='subtitle_large'>
            {isToastError && typeToastError === ETypeToastError.Changes && EToastErrorMessage.ChangesFail}
            {!isToastError && typeToastError === ETypeToastError.Changes && EToastErrorMessage.ChangesSuccess}
            {isToastError && typeToastError === ETypeToastError.Rating && EToastErrorMessage.RatingFail}
            {!isToastError && typeToastError === ETypeToastError.Rating && EToastErrorMessage.RatingSuccess}
            {isToastError && typeToastError === ETypeToastError.Connection && EToastErrorMessage.ConnectionFail}
            {isToastError && typeToastError === ETypeToastError.Default && EToastErrorMessage.DefaultFail}
            {!isToastError && typeToastError === ETypeToastError.Default && EToastErrorMessage.DefaultSuccess}
          </p>
        </div>
        <Sprite id='close' className='toast__logo' onClick={handleToast} />
      </div>
    </div>
  );
};
