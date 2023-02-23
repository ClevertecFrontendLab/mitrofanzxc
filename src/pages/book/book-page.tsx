import { FC, Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';

import { BreadCrumbs, ButtonPrimary, Loader, Modal, Nav, Rating, Review, Slider, Table, Toast } from '../../components';
import { EButtonPrimaryTitle, EButtonPrimaryType } from '../../components/buttons/button-primary/button-primary.types';
import { ETypeToastError } from '../../components/toast/toast.types';
import { useAppDispatch, useAppSelector, useBodyOverflow, useRequest } from '../../hooks';
import { openToast } from '../../store/slices';
import { EConnectionType } from '../../store/slices/slices.types';
import { convertToDate, divideTableData, handleAuthors, handleStatus } from '../../utils';
import { EDate, EPart, EStatus } from '../../utils/utils.types';

import './book-page.scss';

export const BookPage: FC = () => {
  const { category, bookId } = useParams();
  const { bookData, isLoading: isLoadingBook, isError: isErrorBook } = useAppSelector((state) => state.book);
  const { isLoading: isLoadingCategories, isError: isErrorCategories } = useAppSelector((state) => state.categories);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isAccordionReviewsOpen, setIsAccordionReviewsOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const toggleAccordionReviews = () => {
    setIsAccordionReviewsOpen(!isAccordionReviewsOpen);
  };

  const handleModal = (value: boolean) => {
    setIsModalOpen(value);
  };

  const statusResult = handleStatus(bookData.booking, bookData.delivery);

  useEffect(() => {
    if (!isLoadingBook && !isLoadingCategories && (isErrorBook || isErrorCategories)) {
      dispatch(openToast());
    }
  }, [dispatch, isErrorBook, isErrorCategories, isLoadingBook, isLoadingCategories]);

  useRequest(EConnectionType.Book, bookId);
  useBodyOverflow(isModalOpen);

  const ratingNumberClass = classNames({
    h5: bookData.rating !== null && bookData.rating !== undefined && bookData.rating > 0,
    body_small: bookData.rating !== null && bookData.rating !== undefined && bookData.rating <= 0,
  });
  const accordionButtonClass = classNames('accordion__button', {
    accordion__button_active: isAccordionReviewsOpen,
  });
  const reviewListClass = classNames('review-list', {
    'review-list_active': isAccordionReviewsOpen,
  });

  return (
    <section>
      <BreadCrumbs
        bookData={bookData}
        isSuccess={!isLoadingBook && !isLoadingCategories && !isErrorBook && !isErrorCategories}
        currentCategory={category}
      />
      {(isLoadingBook || isLoadingCategories) && !isErrorBook && !isErrorCategories && <Loader />}
      {(isErrorBook || isErrorCategories) && (
        <Toast isToastError={true} typeToastError={ETypeToastError.Connection} dataTestId='error' />
      )}
      {!isLoadingBook && !isLoadingCategories && !isErrorBook && !isErrorCategories && (
        <Fragment>
          <div className='wrapper'>
            <Nav />
            <div className='book-page'>
              <Slider data={bookData} />
              <div className='book-page__info'>
                <h3 className='h3' data-test-id='book-title'>
                  {bookData.title}
                </h3>
                <h5 className='h5 color-grey-black-40 book-page__author'>{handleAuthors(bookData.authors)}</h5>
                {statusResult === EStatus.Free && (
                  <ButtonPrimary
                    type={EButtonPrimaryType.Primary}
                    title={EButtonPrimaryTitle.Book}
                    className='button_large'
                  />
                )}
                {statusResult === EStatus.Busy && (
                  <ButtonPrimary
                    type={EButtonPrimaryType.Secondary}
                    title={EButtonPrimaryTitle.BusyUntil}
                    untilDate={
                      bookData.delivery &&
                      bookData.delivery.dateHandedTo &&
                      convertToDate(bookData.delivery.dateHandedTo, EDate.Short)
                    }
                    className='button_large'
                    disabled={true}
                  />
                )}
                {statusResult === EStatus.Reserved && (
                  <ButtonPrimary
                    type={EButtonPrimaryType.Secondary}
                    title={EButtonPrimaryTitle.Booked}
                    className='button_large'
                  />
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
                {bookData.rating !== null && bookData.rating !== undefined && (
                  <h5 className={ratingNumberClass}>{bookData.rating > 0 && bookData.rating.toFixed(1)}</h5>
                )}
              </div>
              <h5 className='h5 book-page__header'>Подбробная информация</h5>
              <div className='tables-wrapper'>
                <Table data={divideTableData(EPart.First, bookData)} />
                <Table data={divideTableData(EPart.Second, bookData)} />
              </div>
              <div className='accordion__wrapper'>
                <div className='accordion'>
                  <h5 className='h5 book-page__header'>
                    Отзывы {bookData.comments && <span className='body_small'>{bookData.comments.length}</span>}
                  </h5>
                  <button
                    type='button'
                    className={accordionButtonClass}
                    aria-label='button-accordion'
                    onClick={toggleAccordionReviews}
                    data-test-id='button-hide-reviews'
                  />
                </div>
                <ul className={reviewListClass}>
                  {bookData &&
                    bookData.comments &&
                    bookData.comments.length > 0 &&
                    bookData.comments.map((element) => <Review key={element.id} {...element} />)}
                </ul>
              </div>
              <ButtonPrimary
                type={EButtonPrimaryType.Primary}
                title={EButtonPrimaryTitle.RateTheBook}
                onClick={() => handleModal(true)}
                dataTestId='button-rating'
              />
            </div>
          </div>
          {isModalOpen && <Modal bookId={bookId} isModalOpen={isModalOpen} handleModal={handleModal} />}
        </Fragment>
      )}
    </section>
  );
};
