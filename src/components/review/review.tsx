import { FC } from 'react';

import { IReviews } from '../../constants';
import { convertToDate } from '../../utils';
import { Rating } from '..';

import './review.scss';

export const Review: FC<IReviews> = ({ src, author, timestamp, rating, description }) => (
  <li className='review'>
    <div className='review__user-info'>
      <img src={src} alt='user-img' className='review__user-logo' />
      <p className='body_large color-grey-black-70 review__user-name'>{author}</p>
      <p className='body_large color-grey-black-70 review__user-date'>{convertToDate(timestamp, 'full')}</p>
    </div>
    <Rating rating={rating} />
    {description && <p className='review__description body_large'>{description}</p>}
  </li>
);
