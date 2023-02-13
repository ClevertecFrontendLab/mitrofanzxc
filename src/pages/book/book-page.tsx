import { FC, Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';

import { BreadCrumbs, ButtonPrimary, Loader, Nav, Rating, Review, Slider, Table, Toast } from '../../components';
import { useAppSelector, useStartLoading, useToast } from '../../hooks';
import { convertToDate, divideTableData, handleAuthors, handleStatus } from '../../utils';

import './book-page.scss';

export const BookPage: FC = () => {
  const { category, bookId } = useParams();
  const { isLoading, isSuccess, bookData } = useAppSelector((state) => state.book);
  const [isAccordionReviewsOpen, setIsAccordionReviewsOpen] = useState<boolean>(false);

  const toggleAccordionReviews = () => {
    setIsAccordionReviewsOpen(!isAccordionReviewsOpen);
  };

  const statusResult = handleStatus(bookData.booking, bookData.delivery);

  useStartLoading('getBook', bookId);
  useToast({ isLoading, isSuccess });

  return (
    <section>
      <BreadCrumbs bookData={bookData} isSuccess={isSuccess} currentCategory={category} />
      {isLoading && !isSuccess && <Loader />}
      {!isLoading && !isSuccess && <Toast isToastError={true} typeToastError='connection' dataTestId='error' />}
      {!isLoading && isSuccess && (
        <Fragment>
          <div className='wrapper'>
            <Nav />
            <div className='book-page'>
              <Slider data={bookData} />
              <div className='book-page__info'>
                <h3 className='h3'>{bookData.title}</h3>
                <h5 className='h5 color-grey-black-40 book-page__author'>{handleAuthors(bookData.authors)}</h5>
                {statusResult === 'free' && (
                  <ButtonPrimary type='primary' title='Забронировать' className='button_large' />
                )}
                {statusResult === 'busy' && (
                  <ButtonPrimary
                    type='secondary'
                    title={`Занята до ${
                      bookData.delivery &&
                      bookData.delivery.dateHandedTo &&
                      convertToDate(bookData.delivery.dateHandedTo, 'short')
                    }`}
                    className='button_large'
                    disabled={true}
                  />
                )}
                {statusResult === 'reserved' && (
                  <ButtonPrimary type='secondary' title='Забронирована' className='button_large' />
                )}
              </div>
              <div className='book-page__description'>
                <h5 className='h5 book-page__header'>О книге</h5>
                <p className='body_large'>{bookData.description}</p>
              </div>
            </div>
          </div>
          <div className='wrapper'>
            <div className='book-page__detail'>
              <h5 className='h5 book-page__header'>Рейтинг</h5>
              <div className='book-page__rating-wrapper'>
                <Rating rating={bookData.rating} />
                <h5 className={`${bookData.rating ? 'h5' : 'body_small'}`}>
                  {bookData.rating && bookData.rating > 0 && bookData.rating.toFixed(1)}
                  {!bookData.rating && 'ещё нет оценок'}
                </h5>
              </div>
              <h5 className='h5 book-page__header'>Подбробная информация</h5>
              <div className='tables-wrapper'>
                <Table data={divideTableData('first', bookData)} />
                <Table data={divideTableData('second', bookData)} />
              </div>
              <div className='accordion__wrapper'>
                <div className='accordion'>
                  <h5 className='h5 book-page__header'>
                    Отзывы {bookData.comments && <span className='body_small'>{bookData.comments.length}</span>}
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
                  {bookData &&
                    bookData.comments &&
                    bookData.comments.length > 0 &&
                    bookData.comments.map((element) => <Review key={element.id} {...element} />)}
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
