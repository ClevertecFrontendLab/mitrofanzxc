import { ChangeEvent, FC, FocusEvent, KeyboardEvent, useContext, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { ContextMainPage } from '../../pages';
import { filterCatalogByCategory, handleIsInputSearchOpen, searchCatalogByTitle } from '../../store/slices';
import { handleFilter, handleSearch } from '../../utils';
import { ELanguage } from '../../utils/utils.types';
import { ESpriteId } from '../sprite/sprite.types';
import { Sprite } from '..';

import './input-search.scss';

export const InputSearch: FC = () => {
  const { category } = useParams();
  const { inputSearchValue, setInputSearchValue } = useContext(ContextMainPage);
  const { isInputSearchOpen } = useAppSelector((state) => state.search);
  const { categoriesData } = useAppSelector((state) => state.categories);
  const { initialData } = useAppSelector((state) => state.catalog);
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
        dispatch(filterCatalogByCategory(handleFilter(category, categoriesData, ELanguage.En, initialData)));
      }

      dispatch(
        searchCatalogByTitle(
          handleSearch(inputSearchValue, handleFilter(category, categoriesData, ELanguage.En, initialData))
        )
      );
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
    dispatch(filterCatalogByCategory(handleFilter(category, categoriesData, ELanguage.En, initialData)));
    dispatch(
      searchCatalogByTitle(
        handleSearch(inputSearchValue, handleFilter(category, categoriesData, ELanguage.En, initialData))
      )
    );
  }, [categoriesData, category, dispatch, initialData, inputSearchValue]);

  const inputSearchClass = classNames('input-search', 'filter-shadow', {
    'input-search_active': isInputSearchOpen,
  });

  return (
    <div className={inputSearchClass}>
      <button type='button' className='button-search' onClick={handleButtonSearch} data-test-id='button-search-open'>
        <Sprite id={ESpriteId.Search} className='button-search__logo' />
      </button>
      <input
        className='input-search__field body_small'
        type='search'
        name='input-search'
        id='input-search'
        placeholder='Поиск книги или автора…'
        autoComplete='off'
        value={inputSearchValue}
        onChange={changeInputSearch}
        onKeyDown={handleKeyboardInputSearch}
        onBlur={blurInputSearch}
        ref={inputSearchRef}
        data-test-id='input-search'
      />
      <button type='button' className='button-cancel' onClick={handleButtonCancel} data-test-id='button-search-close'>
        <Sprite id={ESpriteId.Close} className='button-cancel__logo' />
      </button>
    </div>
  );
};
