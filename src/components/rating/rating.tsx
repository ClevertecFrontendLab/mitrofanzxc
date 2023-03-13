import { NumberAble } from 'constants/constants.types';

import { FC, Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RatingStar } from 'components';
import { SpriteId } from 'components/sprite/sprite.types';
import { v4 as uuidv4 } from 'uuid';

import './rating.scss';

export type RatingProps = {
  rating: NumberAble;
};

export const Rating: FC<RatingProps> = ({ rating }) => {
  const [emptyStarsAmount, setEmptyStarsAmount] = useState<NumberAble>(null);
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
            {Array.from(Array(5)).map(() => RatingStar({ id: uuidv4(), spriteId: SpriteId.StarEmpty }))}
          </ul>
          <p>ещё нет оценок</p>
        </Fragment>
      )}
      {rating !== null && rating !== undefined && rating > 0 && (
        <ul className='rating'>
          {Array.from(Array(Math.trunc(rating))).map(() => RatingStar({ id: uuidv4(), spriteId: SpriteId.StarFill }))}
          {emptyStarsAmount !== null &&
            emptyStarsAmount !== undefined &&
            Array.from(Array(emptyStarsAmount)).map(() => RatingStar({ id: uuidv4(), spriteId: SpriteId.StarEmpty }))}
        </ul>
      )}
    </Fragment>
  );
};
