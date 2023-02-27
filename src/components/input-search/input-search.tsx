import { ChangeEvent, FC, FocusEvent, KeyboardEvent, useContext, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Sprite } from 'components';
import { SpriteId } from 'components/sprite/sprite.types';
import { useAppDispatch, useAppSelector } from 'hooks';
import { ContextMainPage } from 'pages';
import { catalogSelector, categoriesSelector } from 'store/selectors';
import { filterCatalogByCategory, searchCatalogByTitle } from 'store/slices';
import { handleFilter, handleSearch } from 'utils';
import { Language } from 'utils/utils.types';

import './input-search.scss';

export const InputSearch: FC = () => {
  const { category } = useParams();
  const { inputSearchValue, setInputSearchValue, isInputSearchOpen, setIsInputSearchOpen } =
    useContext(ContextMainPage);
  const { categoriesData } = useAppSelector(categoriesSelector);
  const { initialData } = useAppSelector(catalogSelector);
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
      setIsInputSearchOpen(false);
    }
  };

  const handleKeyboardInputSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (category) {
        dispatch(filterCatalogByCategory(handleFilter(categoriesData, Language.En, initialData, category)));
      }

      dispatch(
        searchCatalogByTitle(
          handleSearch(inputSearchValue, handleFilter(categoriesData, Language.En, initialData, category))
        )
      );
    }
  };

  const handleButtonSearch = () => {
    if (inputSearchRef && inputSearchRef.current) {
      inputSearchRef.current.focus();
    }

    setIsInputSearchOpen(true);
  };

  const handleButtonCancel = () => {
    setIsInputSearchOpen(false);
  };

  useEffect(() => {
    dispatch(filterCatalogByCategory(handleFilter(categoriesData, Language.En, initialData, category)));
    dispatch(
      searchCatalogByTitle(
        handleSearch(inputSearchValue, handleFilter(categoriesData, Language.En, initialData, category))
      )
    );
  }, [categoriesData, category, dispatch, initialData, inputSearchValue]);

  const inputSearchClass = classNames('input-search', 'filter-shadow', {
    'input-search_active': isInputSearchOpen,
  });

  return (
    <div className={inputSearchClass}>
      <button type='button' className='button-search' onClick={handleButtonSearch} data-test-id='button-search-open'>
        <Sprite id={SpriteId.Search} className='button-search__logo' />
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
        <Sprite id={SpriteId.Close} className='button-cancel__logo' />
      </button>
    </div>
  );
};
