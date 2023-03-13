import { API } from 'constants/axios';
import { NumberAble, StringAble } from 'constants/constants.types';

import { FC } from 'react';
import userImg from 'assets/user-review.png';
import { Rating } from 'components';
import { convertToDate } from 'utils';
import { DateType } from 'utils/utils.types';

import './review.scss';

export type ReviewProps = {
  id: string;
  rating: NumberAble;
  text: StringAble;
  createdAt: string;
  user: {
    commentUserId: number;
    firstName: string;
    lastName: string;
    avatarUrl: StringAble;
  };
};

export const Review: FC<ReviewProps> = ({ id, rating, text, createdAt, user }) => (
  <li className='review'>
    <div className='review__user-info'>
      {user.avatarUrl && <img src={`${API.BaseUrl}${user.avatarUrl}`} alt='user-img' className='review__user-logo' />}
      {!user.avatarUrl && <img src={`${userImg}`} alt='user-img' className='review__user-logo' />}
      <p className='body_large color-grey-black-70 review__user-name'>{`${user.lastName} ${user.firstName}`}</p>
      <p className='body_large color-grey-black-70 review__user-date'>{convertToDate(createdAt, DateType.Full)}</p>
    </div>
    <Rating rating={rating} />
    {text && <p className='review__description body_large'>{text}</p>}
  </li>
);
