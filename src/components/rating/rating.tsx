import { FC, Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { TNumberAble } from '../../constants/constants.types';
import { RatingStar } from '..';

import { EStar, TRating } from './rating.types';

import './rating.scss';

export const Rating: FC<TRating> = ({ rating }) => {
  const [emptyStarsAmount, setEmptyStarsAmount] = useState<TNumberAble>(null);
  const { bookId } = useParams();

  useEffect(() => {
    if (rating) {
      setEmptyStarsAmount(5 - Math.trunc(rating));
    } else {
      setEmptyStarsAmount(null);
    }
  }, [rating]);

  return (
    <Fragment>
      {!rating && !bookId && <p className='body_small'>ещё нет оценок</p>}
      {!rating && bookId && (
        <Fragment>
          <ul className='rating'>
            {Array.from(Array(5)).map(() => RatingStar({ id: uuidv4(), spriteId: EStar.Empty }))}
          </ul>
          <p>ещё нет оценок</p>
        </Fragment>
      )}
      {rating !== null && rating !== undefined && rating > 0 && (
        <ul className='rating'>
          {Array.from(Array(Math.trunc(rating))).map(() => RatingStar({ id: uuidv4(), spriteId: EStar.Fill }))}
          {emptyStarsAmount !== null &&
            emptyStarsAmount !== undefined &&
            Array.from(Array(emptyStarsAmount)).map(() => RatingStar({ id: uuidv4(), spriteId: EStar.Empty }))}
        </ul>
      )}
    </Fragment>
  );
};
