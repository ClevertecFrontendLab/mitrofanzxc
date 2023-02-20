import { ChangeEvent, FC, FocusEvent, KeyboardEvent, useContext, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { ContextMainPage } from '../../pages';
import { filterCatalogByCategory, handleIsInputSearchOpen, searchCatalogByTitle } from '../../store/slices';
import { translateCategoryTitle } from '../../utils';
import { Sprite } from '..';

import './input-search.scss';

export const InputSearch: FC = () => {
  const { category } = useParams();
  const { inputSearchValue, setInputSearchValue } = useContext(ContextMainPage);
  const { isInputSearchOpen } = useAppSelector((state) => state.search);
  const { categoriesData } = useAppSelector((state) => state.categories);
  const inputSearchRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const changeInputSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const { value } = target;

    setInputSearchValue(value);
  };

  const blurInputSearch = (event: FocusEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const { value } = target;

    if (!value) {
      dispatch(handleIsInputSearchOpen(false));
    }
  };

  const handleKeyboardInputSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (category) {
        dispatch(filterCatalogByCategory(translateCategoryTitle(category, categoriesData, 'en')));
      }

      dispatch(searchCatalogByTitle(inputSearchValue));
    }
  };

  const handleButtonSearch = () => {
    if (inputSearchRef && inputSearchRef.current) {
      inputSearchRef.current.focus();
    }

    dispatch(handleIsInputSearchOpen(true));
  };

  const handleButtonCancel = () => {
    dispatch(handleIsInputSearchOpen(false));
  };

  useEffect(() => {
    if (category) {
      dispatch(filterCatalogByCategory(translateCategoryTitle(category, categoriesData, 'en')));
    }

    dispatch(searchCatalogByTitle(inputSearchValue));
  }, [inputSearchValue, dispatch, category, categoriesData]);

  return (
    <div className={`input-search ${isInputSearchOpen ? 'input-search_active' : ''}`}>
      <button type='button' className='button-search' onClick={handleButtonSearch} data-test-id='button-search-open'>
        <Sprite id='search' className='button-search__logo' />
      </button>
      <input
        className='input-search__field body_small'
        type='search'
        name='input-search'
        id='input-search'
        placeholder='Поиск книги или автора...'
        autoComplete='off'
        value={inputSearchValue}
        onChange={changeInputSearch}
        onKeyDown={handleKeyboardInputSearch}
        onBlur={blurInputSearch}
        ref={inputSearchRef}
        data-test-id='input-search'
      />
      <button type='button' className='button-cancel' onClick={handleButtonCancel} data-test-id='button-search-close'>
        <Sprite id='close' className='button-cancel__logo' />
      </button>
    </div>
  );
};
