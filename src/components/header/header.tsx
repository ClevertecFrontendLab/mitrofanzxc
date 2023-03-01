import { LocalStorage } from 'constants/local-storage';
import { Path } from 'constants/path';
import { TITLE_LIST } from 'constants/title-list';

import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import profileLogo from 'assets/authorized.png';
import { ButtonBurger, Sprite } from 'components';
import { SpriteId } from 'components/sprite/sprite.types';
import { useAppDispatch, useAppSelector } from 'hooks';
import { authorizationSelector } from 'store/selectors';
import { logout } from 'store/slices';
import { removeLocalStorage, translateCategoryTitle } from 'utils';
import { Language } from 'utils/utils.types';

import './header.scss';

export const Header: FC = () => {
  const { pathname } = useLocation();
  const { authorizationResponse } = useAppSelector(authorizationSelector);
  const dispatch = useAppDispatch();

  const indexOfSecondSlash = pathname.indexOf('/', 1);
  const finalPathname = indexOfSecondSlash === -1 ? pathname.slice(1) : pathname.slice(1, indexOfSecondSlash);

  const handleLogout = () => {
    removeLocalStorage(LocalStorage.Token);
    dispatch(logout());
  };

  return (
    <header className='header'>
      <div className='wrapper'>
        <div className='header__wrapper'>
          <Link to={Path.Main} className='header__logo'>
            <Sprite id={SpriteId.Logo} className='logo' />
          </Link>
          <ButtonBurger />
          <div className='header__temporary-wrapper'>
            <h3 className='h3'>{translateCategoryTitle(TITLE_LIST, Language.En, finalPathname)}</h3>
            <div className='profile'>
              <div className='profile__info'>
                <span className='subtitle_small'>{`Привет, ${authorizationResponse.user.firstName}!`}</span>
              </div>
              <Link to={Path.Profile} className='profile__wrapper filter-shadow'>
                <img src={profileLogo} alt='profileLogo' className='profile__logo' />
              </Link>
              <div className='nav__profile filter-shadow'>
                <Link to={Path.Profile} className='h5 nav__item'>
                  Профиль
                </Link>
                <button type='button' className='h5 nav__item' onClick={handleLogout} data-test-id='exit-button'>
                  Выход
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
