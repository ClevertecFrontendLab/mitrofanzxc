import { FC, Fragment } from 'react';

import { useAppDispatch, useAppSelector, useBodyOverflow } from '../../../hooks';
import { closeMobileMenu, toggleMobileMenu } from '../../../store/slices';

import './button-burger.scss';

const ButtonBurger: FC = () => {
  const { isMobileMenuOpen } = useAppSelector((state) => state.mobileMenu);
  const dispatch = useAppDispatch();

  const handleButtonBurger = () => {
    dispatch(toggleMobileMenu());
  };

  const handleShadow = () => {
    dispatch(closeMobileMenu());
  };

  useBodyOverflow();

  return (
    <Fragment>
      <div role='presentation' className={`shadow ${isMobileMenuOpen ? 'shadow_active' : ''}`} onClick={handleShadow} />
      <button className='button-burger' type='button' onClick={handleButtonBurger} data-test-id='button-burger'>
        <span className={`button-burger__bar ${isMobileMenuOpen ? 'button-burger__bar_active' : ''}`} />
        <span className={`button-burger__bar ${isMobileMenuOpen ? 'button-burger__bar_active' : ''}`} />
        <span className={`button-burger__bar ${isMobileMenuOpen ? 'button-burger__bar_active' : ''}`} />
      </button>
    </Fragment>
  );
};

export { ButtonBurger };
