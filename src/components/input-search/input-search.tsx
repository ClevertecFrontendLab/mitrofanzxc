import { ChangeEvent, FC, FocusEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { handleIsInputSearchOpen, searchCatalogByTitle } from '../../store/slices';
import { Sprite } from '..';

import './input-search.scss';

export const InputSearch: FC = () => {
  const [inputSearchValue, setInputSearchValue] = useState<string>('');
  const { isInputSearchOpen } = useAppSelector((state) => state.search);
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
    setInputSearchValue('');
    dispatch(handleIsInputSearchOpen(false));
  };

  useEffect(() => {
    dispatch(searchCatalogByTitle(inputSearchValue));
  }, [inputSearchValue, dispatch]);

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
