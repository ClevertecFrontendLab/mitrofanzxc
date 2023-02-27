import { ChangeEvent, FC, Fragment, useState } from 'react';
import { ButtonPrimary, RateBookRating, Sprite } from 'components';
import { ButtonPrimaryTitle, ButtonPrimaryType } from 'components/buttons/button-primary/button-primary.types';
import { SpriteId } from 'components/sprite/sprite.types';

import './rate-book.scss';

export type RateBookProps = {
  bookId?: string;
  isRateBookOpen: boolean;
  handleModal: (value: boolean) => void;
};

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export const RateBook: FC<RateBookProps> = ({ bookId, isRateBookOpen, handleModal }) => {
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
          <Sprite id={SpriteId.Close} className='button-close__logo' />
        </button>
        <h4 className='h4'>Оцените книгу</h4>
        <p className='subtitle_large'>Ваша оценка</p>
        <ul className='rating'>
          <RateBookRating />
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
        <ButtonPrimary type={ButtonPrimaryType.Primary} title={ButtonPrimaryTitle.Rate} className='button_large' />
      </form>
    </Fragment>
  );
};
