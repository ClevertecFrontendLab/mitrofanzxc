import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import profileLogo from '../../assets/authorized.png';
import { PATHS, TitlesMockData } from '../../constants';
import { translateCategoryTitle } from '../../utils';
import { ELanguage } from '../../utils/utils.types';
import { ButtonBurger, Sprite } from '..';

import './header.scss';

export const Header: FC = () => {
  const { main, profile } = PATHS;
  const { pathname } = useLocation();

  const indexOfSecondSlash = pathname.indexOf('/', 1);
  const finalPathname = indexOfSecondSlash === -1 ? pathname.slice(1) : pathname.slice(1, indexOfSecondSlash);

  return (
    <header className='header'>
      <div className='wrapper'>
        <div className='header__wrapper'>
          <Link to={main} className='header__logo'>
            <Sprite id='logo' className='logo' />
          </Link>
          <ButtonBurger />
          <div className='header__temporary-wrapper'>
            <h3 className='h3'>{translateCategoryTitle(finalPathname, TitlesMockData, ELanguage.En)}</h3>
            <div className='profile'>
              <div className='profile__info'>
                <span className='subtitle_small'>Привет, Иван!</span>
              </div>
              <Link to={profile} className='profile__wrapper filter-shadow'>
                <img src={profileLogo} alt='profileLogo' className='profile__logo' />
              </Link>
              <div className='nav__profile filter-shadow'>
                <Link to={profile} className='h5 nav__item'>
                  Профиль
                </Link>
                <h5 className='h5 nav__item'>Выход</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
