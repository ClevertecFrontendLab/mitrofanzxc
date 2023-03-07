import { BookData } from 'constants/constants.types';
import { DataTestId } from 'constants/data-test-id';

import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';
import { categoriesSelector } from 'store/selectors';
import { openAccordionMenu } from 'store/slices';
import { handleCategory, translateCategoryTitle } from 'utils';
import { Language } from 'utils/utils.types';

import './bread-crumbs.scss';

export type BreadCrumbsProps = {
  bookData: BookData;
  isSuccess: boolean;
  currentCategory?: string;
};

export const BreadCrumbs: FC<BreadCrumbsProps> = ({ bookData, isSuccess, currentCategory }) => {
  const { categoriesData } = useAppSelector(categoriesSelector);
  const dispatch = useAppDispatch();

  const handleBreadCrumbCategory = () => {
    dispatch(openAccordionMenu());
  };

  const categoryResult = handleCategory(bookData.categories, currentCategory);

  return (
    <div className='bread-crumbs_bg'>
      <div className='wrapper'>
        <div className='bread-crumbs'>
          <Link
            to={`/books/${translateCategoryTitle(categoriesData, Language.Ru, categoryResult)}`}
            className='body_small display_inline-block'
            onClick={() => handleBreadCrumbCategory}
            data-test-id={DataTestId.BreadcrumbsLink}
          >
            {categoryResult}
          </Link>
          {bookData && bookData.title && isSuccess && (
            <Link
              to={`/books/${translateCategoryTitle(categoriesData, Language.Ru, categoryResult)}/${bookData.id}`}
              className='body_small display_inline'
              data-test-id={DataTestId.BookName}
            >
              {bookData.title}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
