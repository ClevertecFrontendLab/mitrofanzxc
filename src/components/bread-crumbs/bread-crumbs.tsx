import { FC } from 'react';
import { Link } from 'react-router-dom';

import { CategoryMockData } from '../../constants';
import { useAppDispatch } from '../../hooks';
import { openAccordionMenu } from '../../store/slices';
import { translateCategoryTitle } from '../../utils';

import { IBreadCrumbs } from './bread-crumbs.interface';

import './bread-crumbs.scss';

export const BreadCrumbs: FC<IBreadCrumbs> = ({ bookInfo, isSuccess }) => {
  const dispatch = useAppDispatch();

  const handleBreadCrumbCategory = () => {
    dispatch(openAccordionMenu());
  };

  return (
    <div className='bread-crumbs_bg'>
      <div className='wrapper'>
        <div className='bread-crumbs'>
          <Link
            to={`/books/${bookInfo ? bookInfo.category : 'all'}`}
            className='body_small display_inline-block'
            onClick={() => handleBreadCrumbCategory}
            data-test-id='breadcrumbs-link'
          >
            {translateCategoryTitle(bookInfo, CategoryMockData)}
          </Link>
          {bookInfo && bookInfo.title && isSuccess && (
            <Link
              to={`/books/${bookInfo ? bookInfo.category : 'all'}/${bookInfo ? bookInfo.id : ''}`}
              className='body_small display_inline'
              data-test-id='breadcrumbs-link'
            >
              {bookInfo.title}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
