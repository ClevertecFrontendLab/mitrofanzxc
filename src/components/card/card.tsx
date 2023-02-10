import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ICatalogMockData } from '../../constants';
import { convertToDate } from '../../utils';
import { ButtonPrimary, Rating, Sprite } from '..';

import './card.scss';

export interface ICard extends ICatalogMockData {
  catalogView: 'grid' | 'list';
}

export const Card: FC<ICard> = ({ id, category, rating, title, author, images, status, catalogView }) => {
  const [limiter, SetLimiter] = useState<number>(54);
  const [match700, setMatch700] = useState(Boolean(window.matchMedia('(max-width: 700px)').matches));
  const [match320, setMatch320] = useState(Boolean(window.matchMedia('(max-width: 320px)').matches));

  // Обработчик для заголовков карточек
  const handleTitle = (value: string, limeter: number) => {
    if (value.length > limeter) {
      return `${value.slice(0, limeter)}...`;
    }

    if (!value.length) {
      return 'Empty title...';
    }

    return value;
  };

  // Ограничитель по количетсву символов в карточке, в зависимости от ширины экрана
  useEffect(() => {
    const mediaQueryList700 = window.matchMedia('(min-width: 321px) and (max-width: 700px)');
    const mediaQueryList320 = window.matchMedia('(max-width: 320px)');

    const handler = () => {
      setMatch700(Boolean(mediaQueryList700.matches));
      setMatch320(Boolean(mediaQueryList320.matches));

      if (match700) {
        SetLimiter(24);
      } else if (match320) {
        SetLimiter(75);
      } else {
        SetLimiter(54);
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
      to={`/books/${category}/${id}`}
      className={`${catalogView === 'grid' ? 'card' : 'card-list'}`}
      data-test-id='card'
    >
      <div className={`${catalogView === 'grid' ? 'placeholder' : 'placeholder-list'}`}>
        {!images ||
          (images.length <= 0 && (
            <Sprite id='cat' className={`${catalogView === 'grid' ? 'placeholder__logo' : 'placeholder-list__logo'}`} />
          ))}
        {images && images.length > 0 && (
          <img
            src={images[0].src}
            alt='card-img'
            className={`${catalogView === 'grid' ? 'card__img' : 'card-list__img'}`}
          />
        )}
      </div>
      <div className={`card__info ${catalogView === 'grid' ? '' : 'card__info_list'}`}>
        {status.message === 'free' && (
          <ButtonPrimary
            type='primary'
            title='Забронировать'
            className={`button_small_mobile ${catalogView === 'grid' ? '' : 'button_list'}`}
          />
        )}
        {status.message === 'busy' && (
          <ButtonPrimary
            type='secondary'
            title={`Занята до ${status.timestamp && convertToDate(status.timestamp, 'short')}`}
            className={`button_small_mobile ${catalogView === 'grid' ? '' : 'button_list'}`}
            disabled={true}
          />
        )}
        {status.message === 'reserved' && (
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
          <p className='body_small card-list__author'>{handleTitle(author, limiter)}</p>
        </div>
        <div className={`${catalogView === 'grid' ? 'rating-wrapper' : 'rating-list__wrapper'}`}>
          <Rating rating={rating} />
        </div>
      </div>
    </Link>
  );
};
