import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';

import { BASE_URL_API } from '../../constants';
import { useAppSelector } from '../../hooks';
import { ContextMainPage } from '../../pages';
import { convertToDate, handleAuthors, handleCategory, handleStatus, translateCategoryTitle } from '../../utils';
import { ButtonPrimary, HighLight, Rating, Sprite } from '..';

import { ICard } from './card.interface';

import './card.scss';

export const Card: FC<ICard> = ({
  id,
  categories,
  currentCategory,
  rating,
  title,
  authors,
  image,
  delivery,
  booking,
  catalogView,
  issueYear,
}) => {
  const { categoriesData } = useAppSelector((state) => state.categories);
  const { inputSearchValue } = useContext(ContextMainPage);

  const statusResult = handleStatus(booking, delivery);
  const categoryResult = translateCategoryTitle(handleCategory(currentCategory, categories), categoriesData, 'ru');

  return (
    <Link
      to={`/books/${categoryResult}/${id}`}
      className={`${catalogView === 'grid' ? 'card' : 'card-list'}`}
      data-test-id='card'
    >
      <div className={`${catalogView === 'grid' ? 'placeholder' : 'placeholder-list'}`}>
        {(!image || image.url.length <= 0) && (
          <Sprite id='cat' className={`${catalogView === 'grid' ? 'placeholder__logo' : 'placeholder-list__logo'}`} />
        )}
        {image && image.url.length > 0 && (
          <img
            src={`${BASE_URL_API}${image.url}`}
            alt='card-img'
            className={`${catalogView === 'grid' ? 'card__img' : 'card-list__img'}`}
          />
        )}
      </div>
      <div className={`card__info ${catalogView === 'grid' ? '' : 'card__info_list'}`}>
        {statusResult === 'free' && (
          <ButtonPrimary
            type='primary'
            title='Забронировать'
            className={`button_small_mobile ${catalogView === 'grid' ? '' : 'button_list'}`}
          />
        )}
        {statusResult === 'busy' && (
          <ButtonPrimary
            type='secondary'
            title={`Занята до ${delivery && delivery.dateHandedTo && convertToDate(delivery.dateHandedTo, 'short')}`}
            className={`button_small_mobile ${catalogView === 'grid' ? '' : 'button_list'}`}
            disabled={true}
          />
        )}
        {statusResult === 'reserved' && (
          <ButtonPrimary
            type='secondary'
            title='Забронирована'
            className={`button_small_mobile ${catalogView === 'grid' ? '' : 'button_list'}`}
          />
        )}
        <div>
          <p className={`${catalogView === 'grid' ? 'subtitle_small' : 'card-list__title'}`}>
            <HighLight inputSearchValue={inputSearchValue} title={title} />
          </p>
          <p className='body_small card-list__author'>{`${handleAuthors(authors)}, ${issueYear}`}</p>
        </div>
        <div className={`${catalogView === 'grid' ? 'rating-wrapper' : 'rating-list__wrapper'}`}>
          <Rating rating={rating} />
        </div>
      </div>
    </Link>
  );
};
