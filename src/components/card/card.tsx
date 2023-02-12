import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { BASE_URL_API } from '../../constants';
import { convertToDate, handleAuthors, handleCategory, handleStatus, handleTitle } from '../../utils';
import { ButtonPrimary, Rating, Sprite } from '..';

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
}) => {
  const [limiter, setLimiter] = useState<number>(54);
  const [match700, setMatch700] = useState(Boolean(window.matchMedia('(max-width: 700px)').matches));
  const [match320, setMatch320] = useState(Boolean(window.matchMedia('(max-width: 320px)').matches));

  const statusResult = handleStatus(booking, delivery);
  const categoryResult = handleCategory(currentCategory, categories);

  // Ограничитель по количетсву символов в карточке, в зависимости от ширины экрана
  useEffect(() => {
    const mediaQueryList700 = window.matchMedia('(min-width: 321px) and (max-width: 700px)');
    const mediaQueryList320 = window.matchMedia('(max-width: 320px)');

    const handler = () => {
      setMatch700(Boolean(mediaQueryList700.matches));
      setMatch320(Boolean(mediaQueryList320.matches));

      if (match700) {
        setLimiter(24);
      } else if (match320) {
        setLimiter(75);
      } else {
        setLimiter(54);
      }
    };

    mediaQueryList700.addEventListener('change', handler);
    mediaQueryList320.addEventListener('change', handler);
    handler();

    return () => {
      mediaQueryList700.removeEventListener('change', handler);
      mediaQueryList320.removeEventListener('change', handler);
    };
  }, [match700, match320]);

  return (
    <Link
      to={`/books/${categoryResult}/${id}`}
      className={`${catalogView === 'grid' ? 'card' : 'card-list'}`}
      data-test-id='card'
    >
      <div className={`${catalogView === 'grid' ? 'placeholder' : 'placeholder-list'}`}>
        {!image ||
          (image.url.length <= 0 && (
            <Sprite id='cat' className={`${catalogView === 'grid' ? 'placeholder__logo' : 'placeholder-list__logo'}`} />
          ))}
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
            {handleTitle(title, limiter)}
          </p>
          <p className='body_small card-list__author'>{handleTitle(handleAuthors(authors), limiter)}</p>
        </div>
        <div className={`${catalogView === 'grid' ? 'rating-wrapper' : 'rating-list__wrapper'}`}>
          <Rating rating={rating} />
        </div>
      </div>
    </Link>
  );
};
