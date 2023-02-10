import { FC, Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { v4 as uuidv4 } from 'uuid';

import { RatingStar } from '..';

import './rating.scss';

export interface IRating {
  rating: number | null | undefined;
}

export const Rating: FC<IRating> = ({ rating }) => {
  const [emptyStarsAmount, setEmptyStarsAmount] = useState<number | null | undefined>(null);
  const { bookId } = useParams();

  useEffect(() => {
    if (rating) {
      setEmptyStarsAmount(5 - Math.trunc(rating));
    } else {
      setEmptyStarsAmount(null);
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [rating]);

  return (
    <Fragment>
      {(!rating || rating <= 0) && !bookId && <p className='body_small rating_null'>ещё нет оценок</p>}
      {(!rating || rating <= 0) && bookId && (
        <ul className='rating'>{Array.from(Array(5)).map(() => RatingStar({ id: uuidv4(), spriteId: 'star' }))}</ul>
      )}
      {rating && rating > 0 && (
        <ul className='rating'>
          {Array.from(Array(Math.trunc(rating))).map(() => RatingStar({ id: uuidv4(), spriteId: 'star-fill' }))}
          {Array.from(Array(emptyStarsAmount)).map(() => RatingStar({ id: uuidv4(), spriteId: 'star' }))}
        </ul>
      )}
    </Fragment>
  );
};
