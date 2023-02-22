import { FC, Fragment } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  closePasswordRecovery,
  closeRegistration,
  nextStep,
  openPasswordRecovery,
  toggleRegistration,
} from '../../store/slices';
import { EButtonLoginTitle } from '../buttons/button-login/button-login.types';
import { EButtonPrimaryTitle, EButtonPrimaryType } from '../buttons/button-primary/button-primary.types';
import { ETextFieldId, ETextFieldMessage, ETextFieldPlaceholder, ETextFieldType } from '../text-field/text-field.types';
import { ButtonLogin, ButtonPrimary, TextField } from '..';

import './registration.scss';

export const Registration: FC = () => {
  const { isFlowOpen, isRegistration, isPasswordRecovery, isLetterReceived, formStep } = useAppSelector(
    (state) => state.registration
  );
  const dispatch = useAppDispatch();

  const handleNextStep = () => {
    dispatch(nextStep());
  };

  const handleButtonRegistration = () => {
    dispatch(toggleRegistration());
    dispatch(closePasswordRecovery());
  };

  const handleButtonPasswordRecovery = () => {
    dispatch(openPasswordRecovery());
  };

  const handleButtonPersonalAccount = () => {
    dispatch(closePasswordRecovery());
    dispatch(closeRegistration());
  };

  return (
    /* eslint-disable-next-line react/jsx-no-useless-fragment */
    <Fragment>
      {isFlowOpen && (
        <div className='registration-bg'>
          <h3 className='h3'>Cleverland</h3>
          <form className='registration'>
            {/* Для незарегистрированных */}
            {isRegistration && !isPasswordRecovery && (
              <fieldset className='registration__fieldset'>
                <div className='registration__section'>
                  <legend className='h4'>Регистрация</legend>
                  <p className='subtitle_small'>
                    <span>{formStep}</span> шаг из 3
                  </p>
                </div>
                <div className='registration__section'>
                  {formStep === 1 && (
                    <Fragment>
                      <TextField
                        type={ETextFieldType.Text}
                        id={ETextFieldId.Login}
                        placeholder={ETextFieldPlaceholder.CreateUserName}
                        message={ETextFieldMessage.CreateUserName}
                      />
                      <TextField
                        type={ETextFieldType.Password}
                        id={ETextFieldId.Password}
                        placeholder={ETextFieldPlaceholder.Password}
                        message={ETextFieldMessage.Password}
                      />
                    </Fragment>
                  )}
                  {formStep === 2 && (
                    <Fragment>
                      <TextField
                        type={ETextFieldType.Text}
                        id={ETextFieldId.FirstName}
                        placeholder={ETextFieldPlaceholder.FirstName}
                      />
                      <TextField
                        type={ETextFieldType.Text}
                        id={ETextFieldId.LastName}
                        placeholder={ETextFieldPlaceholder.LastName}
                      />
                    </Fragment>
                  )}
                  {formStep === 3 && (
                    <Fragment>
                      <TextField
                        type={ETextFieldType.Tel}
                        id={ETextFieldId.Phone}
                        placeholder={ETextFieldPlaceholder.Tel}
                        message={ETextFieldMessage.Tel}
                      />
                      <TextField
                        type={ETextFieldType.Email}
                        id={ETextFieldId.Email}
                        placeholder={ETextFieldPlaceholder.Email}
                      />
                    </Fragment>
                  )}
                </div>
                <div className='registration__section'>
                  {formStep === 1 && (
                    <ButtonPrimary
                      type={EButtonPrimaryType.Primary}
                      title={EButtonPrimaryTitle.NextStep}
                      className='button_large'
                      onClick={handleNextStep}
                    />
                  )}
                  {formStep === 2 && (
                    <ButtonPrimary
                      type={EButtonPrimaryType.Primary}
                      title={EButtonPrimaryTitle.LastStep}
                      className='button_large'
                      onClick={handleNextStep}
                    />
                  )}
                  {formStep === 3 && (
                    <ButtonPrimary
                      type={EButtonPrimaryType.Primary}
                      title={EButtonPrimaryTitle.Register}
                      className='button_large'
                      onClick={handleNextStep}
                    />
                  )}
                  <p className='body_large'>
                    <span>Есть учётная запись?</span>
                    <ButtonLogin title={EButtonLoginTitle.Enter} onClick={handleButtonRegistration} />
                  </p>
                </div>
              </fieldset>
            )}

            {/* Для зарегистрированных */}
            {!isRegistration && !isPasswordRecovery && (
              <fieldset className='registration__fieldset'>
                <div className='registration__section'>
                  <legend className='h4'>Вход в личный кабинет</legend>
                </div>
                <div className='registration__section'>
                  <TextField
                    type={ETextFieldType.Text}
                    id={ETextFieldId.Login}
                    placeholder={ETextFieldPlaceholder.Login}
                  />
                  <TextField
                    type={ETextFieldType.Password}
                    id={ETextFieldId.Password}
                    placeholder={ETextFieldPlaceholder.Password}
                    message={ETextFieldMessage.Password}
                  />
                  <button type='button' className='info_large' onClick={handleButtonPasswordRecovery}>
                    Забыли логин или пароль?
                  </button>
                </div>
                <div className='registration__section'>
                  <ButtonPrimary
                    type={EButtonPrimaryType.Primary}
                    title={EButtonPrimaryTitle.Entrance}
                    className='button_large'
                  />
                  <p className='body_large'>
                    <span>Нет учётной записи</span>
                    <ButtonLogin title={EButtonLoginTitle.Registration} onClick={handleButtonRegistration} />
                  </p>
                </div>
              </fieldset>
            )}

            {/* Для восстановления пароля */}
            {isPasswordRecovery && (
              <fieldset className='registration__fieldset'>
                <ButtonLogin title={EButtonLoginTitle.Login} onClick={handleButtonPersonalAccount} />
                <div className='registration__section'>
                  <legend className='h4'>Восстановление пароля</legend>
                </div>
                <div className='registration__section'>
                  <TextField
                    type={ETextFieldType.Email}
                    id={ETextFieldId.Email}
                    placeholder={ETextFieldPlaceholder.Email}
                    message={ETextFieldMessage.Email}
                  />
                </div>
                <div className='registration__section'>
                  <ButtonPrimary
                    type={EButtonPrimaryType.Primary}
                    title={EButtonPrimaryTitle.Restore}
                    className='button_large'
                  />
                  <p className='body_large'>
                    <span>Нет учётной записи</span>
                    <ButtonLogin title={EButtonLoginTitle.Registration} onClick={handleButtonRegistration} />
                  </p>
                </div>
              </fieldset>
            )}

            {/* Для нового пароля по ссылке из почты */}
            {isLetterReceived && (
              <fieldset className='registration__fieldset'>
                <div className='registration__section'>
                  <legend className='h4'>Восстановление пароля</legend>
                </div>
                <div className='registration__section'>
                  <TextField
                    type={ETextFieldType.Password}
                    id={ETextFieldId.Password}
                    placeholder={ETextFieldPlaceholder.NewPassword}
                    message={ETextFieldMessage.Password}
                  />
                  <TextField
                    type={ETextFieldType.Password}
                    id={ETextFieldId.Password}
                    placeholder={ETextFieldPlaceholder.RepeatPassword}
                  />
                </div>
                <div className='registration__section'>
                  <ButtonPrimary
                    type={EButtonPrimaryType.Primary}
                    title={EButtonPrimaryTitle.SaveChanges}
                    className='button_large'
                  />
                  <p className='body_large'>
                    <span>После сохранения войдите в библиотеку, используя новый пароль</span>
                  </p>
                </div>
              </fieldset>
            )}
          </form>
        </div>
      )}
    </Fragment>
  );
};
