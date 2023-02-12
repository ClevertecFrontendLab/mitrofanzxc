import { FC } from 'react';

import { BASE_URL_API } from '../../constants';
import { IComments } from '../../constants/constants.interface';
import { convertToDate } from '../../utils';
import { Rating } from '..';

import './review.scss';

export const Review: FC<IComments> = ({ rating, text, createdAt, user }) => (
  <li className='review'>
    <div className='review__user-info'>
      <img src={`${BASE_URL_API}${user.avatarUrl}`} alt='user-img' className='review__user-logo' />
      <p className='body_large color-grey-black-70 review__user-name'>{`${user.lastName} ${user.firstName}`}</p>
      <p className='body_large color-grey-black-70 review__user-date'>{convertToDate(createdAt, 'full')}</p>
    </div>
    <Rating rating={rating} />
    {text && <p className='review__description body_large'>{text}</p>}
  </li>
);
