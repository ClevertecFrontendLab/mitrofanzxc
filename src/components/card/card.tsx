import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { BASE_URL_API } from '../../constants';
import { useAppSelector } from '../../hooks';
import { ContextMainPage } from '../../pages';
import { convertToDate, handleAuthors, handleCategory, handleStatus, translateCategoryTitle } from '../../utils';
import { EDate, ELanguage, EStatus } from '../../utils/utils.types';
import { ECatalogView } from '../buttons/button-catalog-view/button-catalog-view.types';
import { EButtonPrimaryTitle, EButtonPrimaryType } from '../buttons/button-primary/button-primary.types';
import { ESpriteId } from '../sprite/sprite.types';
import { ButtonPrimary, HighLight, Rating, Sprite } from '..';

import { TCard } from './card.types';

import './card.scss';

export const Card: FC<TCard> = ({
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
  const categoryResult = translateCategoryTitle(
    handleCategory(currentCategory, categories),
    categoriesData,
    ELanguage.Ru
  );

  const cardClass = classNames('filter-shadow', {
    card: catalogView === ECatalogView.Grid,
    'card-list': catalogView !== ECatalogView.Grid,
  });
  const placeholderClass = classNames({
    placeholder: catalogView === ECatalogView.Grid,
    'placeholder-list': catalogView !== ECatalogView.Grid,
  });
  const spriteClass = classNames({
    placeholder__logo: catalogView === ECatalogView.Grid,
    'placeholder-list__logo': catalogView !== ECatalogView.Grid,
  });
  const cardImgClass = classNames({
    card__img: catalogView === ECatalogView.Grid,
    'card-list__img': catalogView !== ECatalogView.Grid,
  });
  const cardInfoClass = classNames('card__info', {
    card__info_list: catalogView !== ECatalogView.Grid,
  });
  const buttonPrimaryClass = classNames('button_small_mobile', {
    button_list: catalogView !== ECatalogView.Grid,
  });
  const cardTitleClass = classNames({
    subtitle_small: catalogView === ECatalogView.Grid,
    'card-list__title': catalogView !== ECatalogView.Grid,
  });
  const ratingWrapperClass = classNames({
    'rating-wrapper': catalogView === ECatalogView.Grid,
    'rating-list__wrapper': catalogView !== ECatalogView.Grid,
  });

  return (
    <Link to={`/books/${categoryResult}/${id}`} className={cardClass} data-test-id='card'>
      <div className={placeholderClass}>
        {(!image || image.url.length <= 0) && <Sprite id={ESpriteId.Cat} className={spriteClass} />}
        {image && image.url.length > 0 && (
          <img src={`${BASE_URL_API}${image.url}`} alt='card-img' className={cardImgClass} />
        )}
      </div>
      <div className={cardInfoClass}>
        {statusResult === EStatus.Free && (
          <ButtonPrimary
            type={EButtonPrimaryType.Primary}
            title={EButtonPrimaryTitle.Book}
            className={buttonPrimaryClass}
          />
        )}
        {statusResult === EStatus.Busy && (
          <ButtonPrimary
            type={EButtonPrimaryType.Secondary}
            title={EButtonPrimaryTitle.BusyUntil}
            untilDate={delivery && delivery.dateHandedTo && convertToDate(delivery.dateHandedTo, EDate.Short)}
            className={buttonPrimaryClass}
            disabled={true}
          />
        )}
        {statusResult === EStatus.Reserved && (
          <ButtonPrimary
            type={EButtonPrimaryType.Secondary}
            title={EButtonPrimaryTitle.Booked}
            className={buttonPrimaryClass}
          />
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
