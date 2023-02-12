import { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { PATHS } from '../../constants';
import { useAppDispatch, useAppSelector, useStartLoading } from '../../hooks';
import { closeAccordionMenu, closeMobileMenu, closeToast, toggleAccordionMenu } from '../../store/slices';
import { getAmountOfBooks } from '../../utils';
import { Sprite } from '..';

import './nav.scss';

export const Nav: FC = () => {
  const { booksAll, terms, contract, profile } = PATHS;
  const [match992, setMatch992] = useState(Boolean(window.matchMedia('(max-width: 992px)').matches));
  const dispatch = useAppDispatch();

  const { catalogData } = useAppSelector((state) => state.catalog);
  const { categoriesData } = useAppSelector((state) => state.categories);
  const { isMobileMenuOpen, isAccordionMenuOpen } = useAppSelector((state) => state.mobileMenu);

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

  useStartLoading('getCategories');

  // Эффект для подстановки необходимых data-test-id в зависимости от ширины экрана
  useEffect(() => {
    const mediaQueryList992 = window.matchMedia('(max-width: 992px)');

    const handler = () => {
      setMatch992(Boolean(mediaQueryList992.matches));
    };

    mediaQueryList992.addEventListener('change', handler);
    handler();

    return () => {
      mediaQueryList992.removeEventListener('change', handler);
    };
  }, [match992]);

  return (
    <nav
      className={`nav ${isMobileMenuOpen ? 'nav_active' : ''} ${isAccordionMenuOpen ? 'nav_accordion' : ''}`}
      data-test-id={`${isMobileMenuOpen ? 'burger-navigation' : ''}`}
    >
      <div className='nav__wrapper'>
        <button
          type='button'
          className='h5 nav__item accordion'
          onClick={handleAccordionMenu}
          data-test-id={`${match992 ? 'burger-showcase' : 'navigation-showcase'}`}
        >
          <NavLink to={booksAll}>Витрина книг</NavLink>
          <Sprite
            id='arrow-down'
            className={`accordion__button ${isAccordionMenuOpen ? 'accordion__button_active' : ''}`}
          />
        </button>
        <ul className={`nav-list ${isAccordionMenuOpen ? 'nav-list_active' : ''}`}>
          <NavLink
            to={booksAll}
            className='nav-list__item'
            onClick={handleMobileMenu}
            data-test-id={`${match992 ? 'burger-books' : 'navigation-books'}`}
          >
            Все книги
          </NavLink>
          {categoriesData &&
            categoriesData.map(({ id, name, path }) => (
              <NavLink key={id} to={`/books/${path}`} className='nav-list__item body_large' onClick={handleMobileMenu}>
                {name}
                <span className='body_small'>{getAmountOfBooks(catalogData, name)}</span>
              </NavLink>
            ))}
        </ul>
        <NavLink
          to={terms}
          className='h5 nav__item'
          onClick={handleTerms}
          data-test-id={`${match992 ? 'burger-terms' : 'navigation-terms'}`}
        >
          Правила пользования
        </NavLink>
        <NavLink
          to={contract}
          className='h5 nav__item'
          onClick={handleTerms}
          data-test-id={`${match992 ? 'burger-contract' : 'navigation-contract'}`}
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
