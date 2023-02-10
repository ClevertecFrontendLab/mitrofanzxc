import { ChangeEvent, FC, KeyboardEvent, useRef, useState } from 'react';

import { useAppDispatch } from '../../store/hooks';
import { searchCatalogByTitle } from '../../store/slices';
import { Sprite } from '..';

import './input-search.scss';

export const InputSearch: FC = () => {
  const [inputSearchValue, setInputSearchValue] = useState<string>('');
  const dispatch = useAppDispatch();
  const inputSearchRef = useRef<HTMLInputElement>(null);

  const handleInputSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const { value } = target;

    setInputSearchValue(value);
    dispatch(searchCatalogByTitle(inputSearchValue));
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
  };

  const handleButtonCancel = () => {
    setInputSearchValue('');
  };

  return (
    <div className='input-search'>
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
        onChange={handleInputSearch}
        onKeyDown={handleKeyboardInputSearch}
        ref={inputSearchRef}
        data-test-id='input-search'
      />
      <button type='button' className='button-cancel' onClick={handleButtonCancel} data-test-id='button-search-close'>
        <Sprite id='close' className='button-cancel__logo' />
      </button>
    </div>
  );
};
