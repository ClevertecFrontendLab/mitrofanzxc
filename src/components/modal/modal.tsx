import { ChangeEvent, FC, Fragment, useState } from 'react';

import { EButtonPrimaryTitle, EButtonPrimaryType } from '../buttons/button-primary/button-primary.types';
import { ESpriteId } from '../sprite/sprite.types';
import { ButtonPrimary, ModalRating, Sprite } from '..';

import { TModal } from './modal.types';

import './modal.scss';

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export const Modal: FC<TModal> = ({ bookId, isModalOpen, handleModal }) => {
  const [textareaValue, setTextareaValue] = useState('');

  const handleTextarea = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const { value } = target;

    setTextareaValue(value);
  };

  return (
    <Fragment>
      <div role='presentation' className='loader' onClick={() => handleModal(false)} />
      <form className='form-comment'>
        <button type='button' onClick={() => handleModal(false)} className='button-close filter-shadow'>
          <Sprite id={ESpriteId.Close} className='button-close__logo' />
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
        <ButtonPrimary type={EButtonPrimaryType.Primary} title={EButtonPrimaryTitle.Rate} className='button_large' />
      </form>
    </Fragment>
  );
};
