import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

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

  const cardClass = classNames('filter-shadow', { card: catalogView === 'grid', 'card-list': catalogView !== 'grid' });
  const placeholderClass = classNames({
    placeholder: catalogView === 'grid',
    'placeholder-list': catalogView !== 'grid',
  });
  const spriteClass = classNames({
    placeholder__logo: catalogView === 'grid',
    'placeholder-list__logo': catalogView !== 'grid',
  });
  const cardImgClass = classNames({
    card__img: catalogView === 'grid',
    'card-list__img': catalogView !== 'grid',
  });
  const cardInfoClass = classNames('card__info', {
    card__info_list: catalogView !== 'grid',
  });
  const buttonPrimaryClass = classNames('button_small_mobile', {
    button_list: catalogView !== 'grid',
  });
  const cardTitleClass = classNames({
    subtitle_small: catalogView === 'grid',
    'card-list__title': catalogView !== 'grid',
  });
  const ratingWrapperClass = classNames({
    'rating-wrapper': catalogView === 'grid',
    'rating-list__wrapper': catalogView !== 'grid',
  });

  return (
    <Link to={`/books/${categoryResult}/${id}`} className={cardClass} data-test-id='card'>
      <div className={placeholderClass}>
        {(!image || image.url.length <= 0) && <Sprite id='cat' className={spriteClass} />}
        {image && image.url.length > 0 && (
          <img src={`${BASE_URL_API}${image.url}`} alt='card-img' className={cardImgClass} />
        )}
      </div>
      <div className={cardInfoClass}>
        {statusResult === 'free' && (
          <ButtonPrimary type='primary' title='Забронировать' className={buttonPrimaryClass} />
        )}
        {statusResult === 'busy' && (
          <ButtonPrimary
            type='secondary'
            title={`Занята до ${delivery && delivery.dateHandedTo && convertToDate(delivery.dateHandedTo, 'short')}`}
            className={buttonPrimaryClass}
            disabled={true}
          />
        )}
        {statusResult === 'reserved' && (
          <ButtonPrimary type='secondary' title='Забронирована' className={buttonPrimaryClass} />
        )}
        <div>
          <p className={cardTitleClass}>
            <HighLight inputSearchValue={inputSearchValue} title={title} />
          </p>
          <p className='body_small card-list__author'>{`${handleAuthors(authors)}, ${issueYear}`}</p>
        </div>
        <div className={ratingWrapperClass}>
          <Rating rating={rating} />
        </div>
      </div>
    </Link>
  );
};
