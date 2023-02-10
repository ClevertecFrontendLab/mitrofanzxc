import { FC } from 'react';
import { Link } from 'react-router-dom';

import { CategoryMockData, ICatalogMockData } from '../../constants';
import { useAppDispatch } from '../../store/hooks';
import { openAccordionMenu } from '../../store/slices';
import { translateCategoryTitle } from '../../utils';

import './bread-crumbs.scss';

export interface IBreadCrumbs {
  bookInfo: ICatalogMockData | undefined;
}

export const BreadCrumbs: FC<IBreadCrumbs> = ({ bookInfo }) => {
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
          <Link
            to={`/books/${bookInfo ? bookInfo.category : 'all'}/${bookInfo ? bookInfo.id : ''}`}
            className='body_small display_inline'
            data-test-id='breadcrumbs-link'
          >
            {bookInfo ? bookInfo.title : 'Книга'}
          </Link>
        </div>
      </div>
    </div>
  );
};
