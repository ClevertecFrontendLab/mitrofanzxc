import { DataTestId } from 'constants/data-test-id';

import { FC, Fragment } from 'react';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector, useBodyOverflow } from 'hooks';
import { mobileMenuSelector } from 'store/selectors';
import { closeMobileMenu, toggleMobileMenu } from 'store/slices';

import './button-burger.scss';

const ButtonBurger: FC = () => {
  const { isMobileMenuOpen } = useAppSelector(mobileMenuSelector);
  const dispatch = useAppDispatch();

  const handleButtonBurger = () => {
    dispatch(toggleMobileMenu());
  };

  const handleShadow = () => {
    dispatch(closeMobileMenu());
  };

  const shadowClass = classNames('shadow', { shadow_active: isMobileMenuOpen });
  const buttonBurgerBarClass = classNames('button-burger__bar', { 'button-burger__bar_active': isMobileMenuOpen });

  useBodyOverflow();

  return (
    <Fragment>
      <div role='presentation' className={shadowClass} onClick={handleShadow} />
      <button
        className='button-burger'
        type='button'
        onClick={handleButtonBurger}
        data-test-id={DataTestId.ButtonBurger}
      >
        <span className={buttonBurgerBarClass} />
        <span className={buttonBurgerBarClass} />
        <span className={buttonBurgerBarClass} />
      </button>
    </Fragment>
  );
};

export { ButtonBurger };
