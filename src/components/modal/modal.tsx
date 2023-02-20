import { ChangeEvent, FC, Fragment, useState } from 'react';

import { ButtonPrimary, ModalRating, Sprite } from '..';

import { IModal } from './modal.interface';

import './modal.scss';

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export const Modal: FC<IModal> = ({ bookId, isModalOpen, handleModal }) => {
  const [textareaValue, setTextareaValue] = useState<string>('');

  const handleTextarea = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const { value } = target;

    setTextareaValue(value);
  };

  return (
    <Fragment>
      <div role='presentation' className='loader' onClick={() => handleModal(false)} />
      <form className='form-comment'>
        <button type='button' onClick={() => handleModal(false)} className='button-close'>
          <Sprite id='close' className='button-close__logo' />
        </button>
        <h4 className='h4'>Оцените книгу</h4>
        <p className='subtitle_large'>Ваша оценка</p>
        <ul className='rating'>
          <ModalRating />
        </ul>
        <div className='text-field'>
          <input
            id='textarea'
            type='text'
            placeholder='Оставить отзыв'
            className='text-field__input'
            disabled={false}
            autoComplete='off'
            pattern='^.{1,}$'
            value={textareaValue}
            onChange={handleTextarea}
          />
          <label htmlFor='textarea' data-content='Оставить отзыв' className='text-field__label'>
            <span className='text-field__label_hidden'>Оставить отзыв</span>
          </label>
        </div>
        <ButtonPrimary type='primary' title='Оценить' className='button_large' />
      </form>
    </Fragment>
  );
};
