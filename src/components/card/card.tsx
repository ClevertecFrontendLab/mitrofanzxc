import { API } from 'constants/axios';
import { Booking, Delivery, Histories, NumberAble, StringAble, TImage } from 'constants/constants.types';

import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { ButtonPrimary, HighLight, Rating, Sprite } from 'components';
import { CatalogView } from 'components/buttons/button-catalog-view/button-catalog-view.types';
import { ButtonPrimaryTitle, ButtonPrimaryType } from 'components/buttons/button-primary/button-primary.types';
import { SpriteId } from 'components/sprite/sprite.types';
import { useAppSelector } from 'hooks';
import { ContextMainPage } from 'pages';
import { categoriesSelector } from 'store/selectors';
import { convertToDate, handleAuthors, handleCategory, handleStatus, translateCategoryTitle } from 'utils';
import { DateType, Language, Status } from 'utils/utils.types';

import './card.scss';

export type CardProps = {
  issueYear: StringAble;
  rating: NumberAble;
  title: string;
  authors: string[];
  image: TImage | null;
  categories: string[];
  id: number;
  booking: Booking | null;
  delivery: Delivery | null;
  histories: Histories[] | null;
  catalogView: CatalogView;
  currentCategory?: string;
};

export const Card: FC<CardProps> = ({
  id,
  categories,
  currentCategory,
  rating,
  title,
  authors,
  image,
  delivery,
  histories,
  booking,
  catalogView,
  issueYear,
}) => {
  const { categoriesData } = useAppSelector(categoriesSelector);
  const { inputSearchValue } = useContext(ContextMainPage);

  const statusResult = handleStatus(booking, delivery);
  const categoryResult = translateCategoryTitle(
    categoriesData,
    Language.Ru,
    handleCategory(categories, currentCategory)
  );

  const cardClass = classNames('filter-shadow', {
    card: catalogView === CatalogView.Grid,
    'card-list': catalogView !== CatalogView.Grid,
  });
  const placeholderClass = classNames({
    placeholder: catalogView === CatalogView.Grid,
    'placeholder-list': catalogView !== CatalogView.Grid,
  });
  const spriteClass = classNames({
    placeholder__logo: catalogView === CatalogView.Grid,
    'placeholder-list__logo': catalogView !== CatalogView.Grid,
  });
  const cardImgClass = classNames({
    card__img: catalogView === CatalogView.Grid,
    'card-list__img': catalogView !== CatalogView.Grid,
  });
  const cardInfoClass = classNames('card__info', {
    card__info_list: catalogView !== CatalogView.Grid,
  });
  const buttonPrimaryClass = classNames('button_small_mobile', {
    button_list: catalogView !== CatalogView.Grid,
  });
  const cardTitleClass = classNames({
    subtitle_small: catalogView === CatalogView.Grid,
    'card-list__title': catalogView !== CatalogView.Grid,
  });
  const ratingWrapperClass = classNames({
    'rating-wrapper': catalogView === CatalogView.Grid,
    'rating-list__wrapper': catalogView !== CatalogView.Grid,
  });

  return (
    <Link to={`/books/${categoryResult}/${id}`} className={cardClass} data-test-id='card'>
      <div className={placeholderClass}>
        {(!image || image.url.length <= 0) && <Sprite id={SpriteId.Cat} className={spriteClass} />}
        {image && image.url.length > 0 && (
          <img src={`${API.BaseUrl}${image.url}`} alt='card-img' className={cardImgClass} />
        )}
      </div>
      <div className={cardInfoClass}>
        {statusResult === Status.Free && (
          <ButtonPrimary
            type={ButtonPrimaryType.Primary}
            title={ButtonPrimaryTitle.Book}
            className={buttonPrimaryClass}
          />
        )}
        {statusResult === Status.Busy && (
          <ButtonPrimary
            type={ButtonPrimaryType.Secondary}
            title={ButtonPrimaryTitle.BusyUntil}
            untilDate={delivery && delivery.dateHandedTo && convertToDate(delivery.dateHandedTo, DateType.Short)}
            className={buttonPrimaryClass}
            disabled={true}
          />
        )}
        {statusResult === Status.Reserved && (
          <ButtonPrimary
            type={ButtonPrimaryType.Secondary}
            title={ButtonPrimaryTitle.Booked}
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
