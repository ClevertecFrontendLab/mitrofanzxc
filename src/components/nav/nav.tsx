import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { PATHS } from '../../constants';
import { useAppDispatch, useAppSelector, useMatchScreenWidth } from '../../hooks';
import { closeAccordionMenu, closeMobileMenu, closeToast, toggleAccordionMenu } from '../../store/slices';
import { getAmountOfBooks } from '../../utils';
import { ESpriteId } from '../sprite/sprite.types';
import { Sprite } from '..';

import './nav.scss';

export const Nav: FC = () => {
  const { booksAll, terms, contract, profile } = PATHS;
  const [matchScreenWidth, setMatchScreenWidth] = useState(Boolean(window.matchMedia('(max-width: 992px)').matches));
  const { initialData } = useAppSelector((state) => state.catalog);
  const { categoriesData } = useAppSelector((state) => state.categories);
  const { isMobileMenuOpen, isAccordionMenuOpen } = useAppSelector((state) => state.mobileMenu);
  const dispatch = useAppDispatch();

  const handleAccordionMenu = () => {
    dispatch(toggleAccordionMenu());
  };

  const handleMobileMenu = () => {
    dispatch(closeMobileMenu());
  };

  const handleTerms = () => {
    dispatch(closeMobileMenu());
    dispatch(closeAccordionMenu());
    dispatch(closeToast());
  };

  const handleScreenWidth = (value: boolean) => {
    setMatchScreenWidth(value);
  };

  useMatchScreenWidth(992, handleScreenWidth);

  const navClass = classNames('nav', {
    nav_active: isMobileMenuOpen,
    nav_accordion: isAccordionMenuOpen,
  });
  const spriteClass = classNames('accordion__button', {
    accordion__button_active: isAccordionMenuOpen,
  });
  const navListClass = classNames('nav-list', {
    'nav-list_active': isAccordionMenuOpen,
  });

  return (
    <nav className={navClass} data-test-id={`${isMobileMenuOpen ? 'burger-navigation' : ''}`}>
      <div className='nav__wrapper'>
        <button
          type='button'
          className='h5 nav__item accordion'
          onClick={handleAccordionMenu}
          data-test-id={`${matchScreenWidth ? 'burger-showcase' : 'navigation-showcase'}`}
        >
          <NavLink to={booksAll}>Витрина книг</NavLink>
          {categoriesData && categoriesData.length > 0 && <Sprite id={ESpriteId.ArrowShort} className={spriteClass} />}
        </button>
        {categoriesData && categoriesData.length > 0 && (
          <ul className={navListClass}>
            <NavLink
              to={booksAll}
              className='nav-list__link'
              onClick={handleMobileMenu}
              data-test-id={`${matchScreenWidth ? 'burger-books' : 'navigation-books'}`}
            >
              Все книги
            </NavLink>
            {categoriesData.map(({ id, name, path }) => (
              <li key={id} className='nav-list__item'>
                <NavLink
                  to={`/books/${path}`}
                  className='nav-list__link body_large'
                  onClick={handleMobileMenu}
                  data-test-id={`${matchScreenWidth ? `burger-${path}` : `navigation-${path}`}`}
                >
                  {name}
                </NavLink>
                <span
                  className='body_small'
                  data-test-id={`${
                    matchScreenWidth ? `burger-book-count-for-${path}` : `navigation-book-count-for-${path}`
                  }`}
                >
                  {initialData && initialData.length > 0 && getAmountOfBooks(initialData, name)}
                </span>
              </li>
            ))}
          </ul>
        )}
        <NavLink
          to={terms}
          className='h5 nav__item'
          onClick={handleTerms}
          data-test-id={`${matchScreenWidth ? 'burger-terms' : 'navigation-terms'}`}
        >
          Правила пользования
        </NavLink>
        <NavLink
          to={contract}
          className='h5 nav__item'
          onClick={handleTerms}
          data-test-id={`${matchScreenWidth ? 'burger-contract' : 'navigation-contract'}`}
        >
          Договор оферты
        </NavLink>
      </div>
      <div className='nav__profile'>
        <NavLink to={profile} className='h5 nav__item' onClick={handleMobileMenu}>
          Профиль
        </NavLink>
        <h5 className='h5 nav__item'>Выход</h5>
      </div>
    </nav>
  );
};
