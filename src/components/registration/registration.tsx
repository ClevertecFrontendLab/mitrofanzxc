import { FC, Fragment } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  closePasswordRecovery,
  closeRegistration,
  nextStep,
  openPasswordRecovery,
  toggleRegistration,
} from '../../store/slices';
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
                        type='text'
                        id='login'
                        placeholder='Придумайте логин для входа'
                        message='Используйте для логина латинский алфавит и цифры'
                      />
                      <TextField
                        type='password'
                        id='password'
                        placeholder='Пароль'
                        message='Пароль не менее 8 символов, с заглавной буквой и цифрой'
                      />
                    </Fragment>
                  )}
                  {formStep === 2 && (
                    <Fragment>
                      <TextField type='text' id='firstName' placeholder='Имя' />
                      <TextField type='text' id='lastName' placeholder='Фамилия' />
                    </Fragment>
                  )}
                  {formStep === 3 && (
                    <Fragment>
                      <TextField
                        type='tel'
                        id='phone'
                        placeholder='Номер телефона'
                        message='В формате +375 (xx) xxx-xx-xx'
                      />
                      <TextField type='email' id='email' placeholder='E-mail' />
                    </Fragment>
                  )}
                </div>
                <div className='registration__section'>
                  {formStep === 1 && (
                    <ButtonPrimary
                      type='primary'
                      title='Следующий шаг'
                      className='button_large'
                      onClick={handleNextStep}
                    />
                  )}
                  {formStep === 2 && (
                    <ButtonPrimary
                      type='primary'
                      title='Последний шаг'
                      className='button_large'
                      onClick={handleNextStep}
                    />
                  )}
                  {formStep === 3 && (
                    <ButtonPrimary
                      type='primary'
                      title='Зарегистрироваться'
                      className='button_large'
                      onClick={handleNextStep}
                    />
                  )}
                  <p className='body_large'>
                    <span>Есть учётная запись?</span>
                    <ButtonLogin title='Войти' onClick={handleButtonRegistration} />
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
                  <TextField type='text' id='login' placeholder='Логин' />
                  <TextField
                    type='password'
                    id='password'
                    placeholder='Пароль'
                    message='Пароль не менее 8 символов, с заглавной буквой и цифрой'
                  />
                  <button type='button' className='info_large' onClick={handleButtonPasswordRecovery}>
                    Забыли логин или пароль?
                  </button>
                </div>
                <div className='registration__section'>
                  <ButtonPrimary type='primary' title='Вход' className='button_large' />
                  <p className='body_large'>
                    <span>Нет учётной записи</span>
                    <ButtonLogin title='Регистрация' onClick={handleButtonRegistration} />
                  </p>
                </div>
              </fieldset>
            )}

            {/* Для восстановления пароля */}
            {isPasswordRecovery && (
              <fieldset className='registration__fieldset'>
                <ButtonLogin title='Вход в личный кабинет' onClick={handleButtonPersonalAccount} />
                <div className='registration__section'>
                  <legend className='h4'>Восстановление пароля</legend>
                </div>
                <div className='registration__section'>
                  <TextField
                    type='email'
                    id='email'
                    placeholder='Email'
                    message='На это email будет отправлено письмо с инструкциями по восстановлению пароля'
                  />
                </div>
                <div className='registration__section'>
                  <ButtonPrimary type='primary' title='Восстановить' className='button_large' />
                  <p className='body_large'>
                    <span>Нет учётной записи</span>
                    <ButtonLogin title='Регистрация' onClick={handleButtonRegistration} />
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
                    type='password'
                    id='password'
                    placeholder='Новый пароль'
                    message='Пароль не менее 8 символов, с заглавной буквой и цифрой'
                  />
                  <TextField type='password' id='password' placeholder='Повторите пароль' />
                </div>
                <div className='registration__section'>
                  <ButtonPrimary type='primary' title='Сохранить изменения' className='button_large' />
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
