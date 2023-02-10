import { FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { closeToast } from '../../store/slices';
import { Sprite } from '..';

import './toast.scss';

export const Toast: FC = () => {
  const { isToastError, isToastOpen, typeToastError } = useAppSelector((state) => state.toast);
  const dispatch = useAppDispatch();

  const handleToast = () => {
    dispatch(closeToast());
  };

  return (
    <div className={`toast ${isToastError ? 'toast_error' : 'toast_success'} ${isToastOpen ? 'toast_active' : ''}`}>
      <div className='toast__wrapper'>
        <div className='toast__wrapper'>
          <Sprite id={`${isToastError ? 'warning-circle-fill' : 'check-circle-fill'}`} className='toast__logo' />
          <p className='subtitle_large'>
            {isToastError && typeToastError === 'changes' && 'Изменения не были сохранены. Попробуйте позже!'}
            {!isToastError && typeToastError === 'changes' && 'Изменения успешно сохранены!'}
            {isToastError &&
              typeToastError === 'connection' &&
              'Что-то пошло не так. Обновите страницу через некоторое время.'}
            {isToastError && typeToastError === 'default' && 'Произошла ошибка!'}
            {!isToastError && typeToastError === 'default' && 'Успех!'}
          </p>
        </div>
        <Sprite id='close' className='toast__logo' onClick={handleToast} />
      </div>
    </div>
  );
};
