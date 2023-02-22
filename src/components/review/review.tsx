import { FC } from 'react';

import userImg from '../../assets/user-review.png';
import { BASE_URL_API } from '../../constants';
import { TComments } from '../../constants/constants.types';
import { convertToDate } from '../../utils';
import { EDate } from '../../utils/utils.types';
import { Rating } from '..';

import './review.scss';

export const Review: FC<TComments> = ({ rating, text, createdAt, user }) => (
  <li className='review'>
    <div className='review__user-info'>
      {user.avatarUrl && <img src={`${BASE_URL_API}${user.avatarUrl}`} alt='user-img' className='review__user-logo' />}
      {!user.avatarUrl && <img src={`${userImg}`} alt='user-img' className='review__user-logo' />}
      <p className='body_large color-grey-black-70 review__user-name'>{`${user.lastName} ${user.firstName}`}</p>
      <p className='body_large color-grey-black-70 review__user-date'>{convertToDate(createdAt, EDate.Full)}</p>
    </div>
    <Rating rating={rating} />
    {text && <p className='review__description body_large'>{text}</p>}
  </li>
);
