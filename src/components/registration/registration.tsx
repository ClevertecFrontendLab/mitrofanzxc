import { PatternEmail, PatternLogin, PatternPassword, PatternTel } from 'constants/patterns';

import { FC, Fragment, useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { ButtonLogin, ButtonPrimary, TextField } from 'components';
import { ButtonLoginTitle } from 'components/buttons/button-login/button-login.types';
import { ButtonPrimaryTitle, ButtonPrimaryType } from 'components/buttons/button-primary/button-primary.types';
import {
  TextFieldId,
  TextFieldMessage,
  TextFieldPlaceholder,
  TextFieldType,
} from 'components/text-field/text-field.types';
import { useAppDispatch, useAppSelector, useRequest } from 'hooks';
import { closePasswordRecovery, closeRegistration, openPasswordRecovery, toggleRegistration } from 'store/slices';
import { Connection } from 'store/slices/slices.types';

import { FormTextField } from './registration.types';

import './registration.scss';

export const Registration: FC = () => {
  const { isFlowOpen, isRegistration, isPasswordRecovery, isLetterReceived, registrationRequest } = useAppSelector(
    (state) => state.registration
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTextField>();
  const [step, setStep] = useState(1);
  const dispatch = useAppDispatch();

  const handleStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const onSubmit = (data: FormTextField) => {
    console.log('FORM_DATA ===', data);
    handleStep();
  };

  const onError = (error: FieldErrors<FormTextField>) => {
    console.log('FORM_ERRORS ===', error);
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

  const buttonPrimaryTitle =
    step === 1 ? ButtonPrimaryTitle.NextStep : step === 2 ? ButtonPrimaryTitle.LastStep : ButtonPrimaryTitle.Register;

  useRequest({ connectionType: Connection.Registration, registrationData: registrationRequest });

  return (
    /* eslint-disable-next-line react/jsx-no-useless-fragment */
    <Fragment>
      {isFlowOpen && (
        <div className='registration-bg'>
          <h3 className='h3'>Cleverland</h3>
          <form className='registration' onSubmit={handleSubmit(onSubmit, onError)}>
            {/* Для незарегистрированных */}
            {isRegistration && !isPasswordRecovery && (
              <fieldset className='registration__fieldset'>
                <div className='registration__section'>
                  <legend className='h4'>Регистрация</legend>
                  <p className='subtitle_small'>
                    <span>{step}</span> шаг из 3
                  </p>
                </div>
                <div className='registration__section'>
                  {step === 1 && (
                    <Fragment>
                      <TextField
                        type={TextFieldType.Text}
                        id={TextFieldId.Login}
                        placeholder={TextFieldPlaceholder.CreateUserName}
                        message={TextFieldMessage.CreateUserName}
                        {...register(TextFieldId.Login, { required: true, pattern: PatternLogin })}
                      />
                      <TextField
                        type={TextFieldType.Password}
                        id={TextFieldId.Password}
                        placeholder={TextFieldPlaceholder.Password}
                        message={TextFieldMessage.Password}
                        {...register(TextFieldId.Password, { required: true, pattern: PatternPassword })}
                      />
                    </Fragment>
                  )}
                  {step === 2 && (
                    <Fragment>
                      <TextField
                        type={TextFieldType.Text}
                        id={TextFieldId.FirstName}
                        placeholder={TextFieldPlaceholder.FirstName}
                        {...register(TextFieldId.FirstName, { required: true, pattern: PatternLogin })}
                      />
                      <TextField
                        type={TextFieldType.Text}
                        id={TextFieldId.LastName}
                        placeholder={TextFieldPlaceholder.LastName}
                        {...register(TextFieldId.LastName, { required: true, pattern: PatternLogin })}
                      />
                    </Fragment>
                  )}
                  {step === 3 && (
                    <Fragment>
                      <TextField
                        type={TextFieldType.Tel}
                        id={TextFieldId.Tel}
                        placeholder={TextFieldPlaceholder.Tel}
                        message={TextFieldMessage.Tel}
                        {...register(TextFieldId.Tel, { required: true, pattern: PatternTel })}
                      />
                      <TextField
                        type={TextFieldType.Email}
                        id={TextFieldId.Email}
                        placeholder={TextFieldPlaceholder.Email}
                        {...register(TextFieldId.Email, { required: true, pattern: PatternEmail })}
                      />
                    </Fragment>
                  )}
                </div>
                <div className='registration__section'>
                  <ButtonPrimary type={ButtonPrimaryType.Submit} title={buttonPrimaryTitle} className='button_large' />
                  <p className='body_large'>
                    <span>Есть учётная запись?</span>
                    <ButtonLogin title={ButtonLoginTitle.Enter} onClick={handleButtonRegistration} />
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
                  {/* <TextField
                    type={TextFieldType.Text}
                    id={TextFieldId.Login}
                    placeholder={TextFieldPlaceholder.Login}
                    {...register(TextFieldId.Login, { required: true, pattern: PatternLogin })}
                  />
                  <TextField
                    type={TextFieldType.Password}
                    id={TextFieldId.Password}
                    placeholder={TextFieldPlaceholder.Password}
                    message={TextFieldMessage.Password}
                    {...register(TextFieldId.Password, { required: true, pattern: PatternPassword })}
                  /> */}
                  <button type='button' className='info_large' onClick={handleButtonPasswordRecovery}>
                    Забыли логин или пароль?
                  </button>
                </div>
                <div className='registration__section'>
                  <ButtonPrimary
                    type={ButtonPrimaryType.Primary}
                    title={ButtonPrimaryTitle.Entrance}
                    className='button_large'
                  />
                  <p className='body_large'>
                    <span>Нет учётной записи</span>
                    <ButtonLogin title={ButtonLoginTitle.Registration} onClick={handleButtonRegistration} />
                  </p>
                </div>
              </fieldset>
            )}

            {/* Для восстановления пароля */}
            {isPasswordRecovery && (
              <fieldset className='registration__fieldset'>
                <ButtonLogin title={ButtonLoginTitle.Login} onClick={handleButtonPersonalAccount} />
                <div className='registration__section'>
                  <legend className='h4'>Восстановление пароля</legend>
                </div>
                <div className='registration__section'>
                  {/* <TextField
                    type={TextFieldType.Email}
                    id={TextFieldId.Email}
                    placeholder={TextFieldPlaceholder.Email}
                    message={TextFieldMessage.Email}
                    {...register(TextFieldId.Email, { required: true, pattern: PatternEmail })}
                  /> */}
                </div>
                <div className='registration__section'>
                  <ButtonPrimary
                    type={ButtonPrimaryType.Primary}
                    title={ButtonPrimaryTitle.Restore}
                    className='button_large'
                  />
                  <p className='body_large'>
                    <span>Нет учётной записи</span>
                    <ButtonLogin title={ButtonLoginTitle.Registration} onClick={handleButtonRegistration} />
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
                  {/* <TextField
                    type={TextFieldType.Password}
                    id={TextFieldId.Password}
                    placeholder={TextFieldPlaceholder.NewPassword}
                    message={TextFieldMessage.Password}
                    {...register(TextFieldId.NewPassword, { required: true, pattern: PatternPassword })}
                  />
                  <TextField
                    type={TextFieldType.Password}
                    id={TextFieldId.Password}
                    placeholder={TextFieldPlaceholder.RepeatPassword}
                    {...register(TextFieldId.RepeatNewPassword, { required: true, pattern: PatternPassword })}
                  /> */}
                </div>
                <div className='registration__section'>
                  <ButtonPrimary
                    type={ButtonPrimaryType.Primary}
                    title={ButtonPrimaryTitle.SaveChanges}
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
