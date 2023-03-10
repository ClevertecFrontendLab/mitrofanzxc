import { DataTestId } from 'constants/data-test-id';
import { Path } from 'constants/path';

import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { Sprite } from 'components';
import { SpriteId } from 'components/sprite/sprite.types';
import { useAppDispatch, useAppSelector, useMatchScreenWidth } from 'hooks';
import { catalogSelector, categoriesSelector, mobileMenuSelector } from 'store/selectors';
import { closeAccordionMenu, closeMobileMenu, closeToast, logout, toggleAccordionMenu } from 'store/slices';
import { clearLocalStorage, getAmountOfBooks } from 'utils';

import './nav.scss';

export const Nav: FC = () => {
  const [matchScreenWidth, setMatchScreenWidth] = useState(Boolean(window.matchMedia('(max-width: 992px)').matches));
  const { initialData } = useAppSelector(catalogSelector);
  const { categoriesData } = useAppSelector(categoriesSelector);
  const { isMobileMenuOpen, isAccordionMenuOpen } = useAppSelector(mobileMenuSelector);
  const dispatch = useAppDispatch();

  const handleAccordionMenu = () => {
    dispatch(toggleAccordionMenu());
  };

  const handleMobileMenu = () => {
    dispatch(closeMobileMenu());
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(closeMobileMenu());
    clearLocalStorage();
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
    <nav className={navClass} data-test-id={`${isMobileMenuOpen ? DataTestId.BurgerNavigation : ''}`}>
      <div className='nav__wrapper'>
        <button
          type='button'
          className='h5 nav__item accordion'
          onClick={handleAccordionMenu}
          data-test-id={`${matchScreenWidth ? DataTestId.BurgerShowcase : DataTestId.NavigationShowcase}`}
        >
          <NavLink to={Path.BooksAll}>?????????????? ????????</NavLink>
          {categoriesData && categoriesData.length > 0 && <Sprite id={SpriteId.ArrowShort} className={spriteClass} />}
        </button>
        {categoriesData && categoriesData.length > 0 && (
          <ul className={navListClass}>
            <NavLink
              to={Path.BooksAll}
              className='nav-list__link'
              onClick={handleMobileMenu}
              data-test-id={`${matchScreenWidth ? DataTestId.BurgerBooks : DataTestId.NavigationBooks}`}
            >
              ?????? ??????????
            </NavLink>
            {categoriesData.map(({ id, name, path }) => (
              <li key={id} className='nav-list__item'>
                <NavLink
                  to={`/books/${path}`}
                  className='nav-list__link body_large'
                  onClick={handleMobileMenu}
                  data-test-id={`${
                    matchScreenWidth ? `${DataTestId.Burger}${path}` : `${DataTestId.Navigation}${path}`
                  }`}
                >
                  {name}
                </NavLink>
                <span
                  className='body_small'
                  data-test-id={`${
                    matchScreenWidth
                      ? `${DataTestId.BurgerBookCountFor}${path}`
                      : `${DataTestId.NavigationBookCountFor}${path}`
                  }`}
                >
                  {initialData && initialData.length > 0 && getAmountOfBooks(initialData, name)}
                </span>
              </li>
            ))}
          </ul>
        )}
        <NavLink
          to={Path.Terms}
          className='h5 nav__item'
          onClick={handleTerms}
          data-test-id={`${matchScreenWidth ? DataTestId.BurgerTerms : DataTestId.NavigationTerms}`}
        >
          ?????????????? ??????????????????????
        </NavLink>
        <NavLink
          to={Path.Contract}
          className='h5 nav__item'
          onClick={handleTerms}
          data-test-id={`${matchScreenWidth ? DataTestId.BurgerContract : DataTestId.NavigationContract}`}
        >
          ?????????????? ????????????
        </NavLink>
      </div>
      <div className='nav__profile'>
        <NavLink to={Path.Profile} className='h5 nav__item' onClick={handleMobileMenu}>
          ??????????????
        </NavLink>
        <button type='button' className='h5 nav__item' onClick={handleLogout} data-test-id={DataTestId.ExitButton}>
          ??????????
        </button>
      </div>
    </nav>
  );
};
