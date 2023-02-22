import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { openAccordionMenu } from '../../store/slices';
import { handleCategory, translateCategoryTitle } from '../../utils';
import { ELanguage } from '../../utils/utils.types';

import { TBreadCrumbs } from './bread-crumbs.types';

import './bread-crumbs.scss';

export const BreadCrumbs: FC<TBreadCrumbs> = ({ bookData, isSuccess, currentCategory }) => {
  const { categoriesData } = useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();

  const handleBreadCrumbCategory = () => {
    dispatch(openAccordionMenu());
  };

  const categoryResult = handleCategory(currentCategory, bookData.categories);

  return (
    <div className='bread-crumbs_bg'>
      <div className='wrapper'>
        <div className='bread-crumbs'>
          <Link
            to={`/books/${translateCategoryTitle(categoryResult, categoriesData, ELanguage.Ru)}`}
            className='body_small display_inline-block'
            onClick={() => handleBreadCrumbCategory}
            data-test-id='breadcrumbs-link'
          >
            {categoryResult}
          </Link>
          {bookData && bookData.title && isSuccess && (
            <Link
              to={`/books/${translateCategoryTitle(categoryResult, categoriesData, ELanguage.Ru)}/${bookData.id}`}
              className='body_small display_inline'
              data-test-id='book-name'
            >
              {bookData.title}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
