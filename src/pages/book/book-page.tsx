import { FC, Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';

import { BreadCrumbs, ButtonPrimary, Loader, Nav, Rating, Review, Slider, Table, Toast } from '../../components';
import { CatalogMockData } from '../../constants';
import { useAppSelector, useToast } from '../../hooks';
import { getBook } from '../../store/services';
import { convertToDate, divideTableData } from '../../utils';

import './book-page.scss';

export const BookPage: FC = () => {
  const { bookId } = useParams();
  const { isLoading, isSuccess } = useAppSelector((state) => state.loader);
  const [isAccordionReviewsOpen, setIsAccordionReviewsOpen] = useState<boolean>(false);

  const bookInfo = CatalogMockData.find(({ id }) => id === bookId);

  const toggleAccordionReviews = () => {
    setIsAccordionReviewsOpen(!isAccordionReviewsOpen);
  };

  // getBook('2');

  useToast({ isLoading, isSuccess });

  return (
    <section>
      <BreadCrumbs bookInfo={bookInfo} isSuccess={isSuccess} />
      {isLoading && !isSuccess && <Loader />}
      {!isLoading && !isSuccess && <Toast isToastError={true} typeToastError='connection' dataTestId='error' />}
      {!isLoading && isSuccess && (
        <Fragment>
          <div className='wrapper'>
            <Nav />
            <div className='book-page'>
              <Slider data={bookInfo} />
              <div className='book-page__info'>
                <h3 className='h3'>{bookInfo ? bookInfo.title : 'Книга'}</h3>
                <h5 className='h5 color-grey-black-40 book-page__author'>{bookInfo ? bookInfo.author : 'Автор'}</h5>
                {bookInfo && bookInfo.status.message === 'free' && (
                  <ButtonPrimary type='primary' title='Забронировать' className='button_large' />
                )}
                {bookInfo && bookInfo.status.message === 'busy' && (
                  <ButtonPrimary
                    type='secondary'
                    title={`Занята до ${
                      bookInfo.status.timestamp && convertToDate(bookInfo.status.timestamp, 'short')
                    }`}
                    className='button_large'
                    disabled={true}
                  />
                )}
                {bookInfo && bookInfo.status.message === 'reserved' && (
                  <ButtonPrimary type='secondary' title='Забронирована' className='button_large' />
                )}
              </div>
              <div className='book-page__description'>
                <h5 className='h5 book-page__header'>О книге</h5>
                <p className='body_large'>{bookInfo ? bookInfo.descrtption : 'Описание'}</p>
              </div>
            </div>
          </div>
          <div className='wrapper'>
            <div className='book-page__detail'>
              <h5 className='h5 book-page__header'>Рейтинг</h5>
              <div className='book-page__rating-wrapper'>
                <Rating rating={bookInfo ? bookInfo.rating : null} />
                <h5 className={`${bookInfo && !bookInfo.rating ? 'body_small' : 'h5'}`}>
                  {bookInfo && bookInfo.rating && bookInfo.rating.toFixed(1)}
                  {bookInfo && !bookInfo.rating && 'ещё нет оценок'}
                </h5>
              </div>
              <h5 className='h5 book-page__header'>Подбробная информация</h5>
              <div className='tables-wrapper'>
                <Table data={divideTableData('first', bookInfo)} />
                <Table data={divideTableData('second', bookInfo)} />
              </div>
              <div className='accordion__wrapper'>
                <div className='accordion'>
                  <h5 className='h5 book-page__header'>
                    Отзывы <span className='body_small'>{bookInfo ? bookInfo.reviews.length : ''}</span>
                  </h5>
                  <button
                    type='button'
                    className={`accordion__button ${isAccordionReviewsOpen ? 'accordion__button_active' : ''}`}
                    aria-label='button-accordion'
                    onClick={toggleAccordionReviews}
                    data-test-id='button-hide-reviews'
                  />
                </div>
                <ul className={`review-list ${isAccordionReviewsOpen ? 'review-list_active' : ''}`}>
                  {bookInfo &&
                    bookInfo.reviews.length > 0 &&
                    bookInfo.reviews.map((element) => <Review key={element.id} {...element} />)}
                </ul>
              </div>
              <ButtonPrimary type='primary' title='Оценить книгу' dataTestId='button-rating' />
            </div>
          </div>
        </Fragment>
      )}
    </section>
  );
};
