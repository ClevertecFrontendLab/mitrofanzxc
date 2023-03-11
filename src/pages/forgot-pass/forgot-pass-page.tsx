import { DataTestId } from 'constants/data-test-id';
import { Path } from 'constants/path';
import { REGEX_WITH_EMAIL, REGEX_WITH_PASSWORD } from 'constants/regex';

import { FC, Fragment } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { ButtonLogin, ButtonPrimary, FormToast, Loader, TextField } from 'components';
import { ButtonLoginTitle } from 'components/buttons/button-login/button-login.types';
import { ButtonPrimaryTitle, ButtonPrimaryType } from 'components/buttons/button-primary/button-primary.types';
import {
  FormTextField,
  TextFieldId,
  TextFieldMessage,
  TextFieldPlaceholder,
  TextFieldType,
} from 'components/text-field/text-field.types';
import { useAppDispatch, useAppSelector, useAuth } from 'hooks';
import { authorizationSelector, forgotPassSelector, formToastSelector } from 'store/selectors';
import { passwordRecoveryRequest, passwordResetRequest } from 'store/slices';

import { initialStateEmail, initialStatePassword } from './initial-state';

export const ForgotPassPage: FC = () => {
  const { search } = useLocation();
  const { isAuth } = useAppSelector(authorizationSelector);
  const { isError, isLoading, isLetterReceived, isPasswordRecovery } = useAppSelector(forgotPassSelector);
  const { errorMessage } = useAppSelector(formToastSelector);
  const { handleSubmit: handleSubmitEmail, control: controlEmail } = useForm<FormTextField>(initialStateEmail);
  const { handleSubmit: handleSubmitPassword, control: controlPassword } = useForm<FormTextField>(initialStatePassword);
  const dispatch = useAppDispatch();

  const onSubmitEmail = (data: FormTextField) => {
    console.log('EMAIL_FORM_DATA ===', data);
    const { email } = data;

    if (email) {
      dispatch(passwordResetRequest({ email }));
    }
  };

  const onErrorEmail = (error: FieldErrors<FormTextField>) => {
    console.log('EMAIL_FORM_ERRORS ===', error);
  };

  const onSubmitPassword = (data: FormTextField) => {
    console.log('PASSWORD_FORM_DATA ===', data);
    const { password, passwordConfirmation } = data;
    const code = search.slice(6);

    if (password === passwordConfirmation && password && passwordConfirmation) {
      dispatch(passwordRecoveryRequest({ password, passwordConfirmation, code }));
    }
  };

  const onErrorPassword = (error: FieldErrors<FormTextField>) => {
    console.log('PASSWORD_FORM_ERRORS ===', error);
  };

  useAuth(Path.Main, isAuth);

  return (
    <Fragment>
      {isLoading && <Loader dataTestId={DataTestId.Loader} />}
      {isError && <FormToast dataTestId={DataTestId.StatusBlock} />}
      {!isError && (
        <div className='registration-bg' data-test-id={DataTestId.Auth}>
          <h3 className='h3'>Cleverland</h3>
          {/* Для восстановления пароля */}
          {isPasswordRecovery && (
            <form
              className='registration'
              onSubmit={handleSubmitEmail(onSubmitEmail, onErrorEmail)}
              data-test-id={DataTestId.SendEmailForm}
            >
              <fieldset className='registration__fieldset'>
                <ButtonLogin title={ButtonLoginTitle.Login} path={Path.Authorization} />
                <div className='registration__section'>
                  <legend className='h4'>Восстановление пароля</legend>
                </div>
                <div className='registration__section'>
                  <TextField
                    control={controlEmail}
                    name={TextFieldId.Email}
                    rules={{ required: true, pattern: REGEX_WITH_EMAIL }}
                    type={TextFieldType.Email}
                    id={TextFieldId.Email}
                    placeholder={TextFieldPlaceholder.Email}
                    message={TextFieldMessage.Email}
                    isError={isError}
                  />
                </div>
                <div className='registration__section'>
                  <ButtonPrimary
                    type={ButtonPrimaryType.Primary}
                    title={ButtonPrimaryTitle.Restore}
                    className='button_large'
                  />
                  <p className='body_large'>
                    <span>Нет учётной записи</span>
                    <ButtonLogin title={ButtonLoginTitle.Registration} path={Path.Registration} />
                  </p>
                </div>
              </fieldset>
            </form>
          )}

          {/* Для нового пароля по ссылке из почты */}
          {isLetterReceived && (
            <form
              className='registration'
              onSubmit={handleSubmitPassword(onSubmitPassword, onErrorPassword)}
              data-test-id={DataTestId.ResetPasswordForm}
            >
              <fieldset className='registration__fieldset'>
                <div className='registration__section'>
                  <legend className='h4'>Восстановление пароля</legend>
                </div>
                <div className='registration__section'>
                  <TextField
                    control={controlPassword}
                    name={TextFieldId.Password}
                    rules={{ required: true, pattern: REGEX_WITH_PASSWORD }}
                    type={TextFieldType.Password}
                    id={TextFieldId.Password}
                    placeholder={TextFieldPlaceholder.NewPassword}
                    message={errorMessage ? '' : TextFieldMessage.Password}
                    isError={isError}
                  />
                  <TextField
                    control={controlPassword}
                    name={TextFieldId.PasswordConfirmation}
                    rules={{ required: true, pattern: REGEX_WITH_PASSWORD }}
                    type={TextFieldType.Password}
                    id={TextFieldId.PasswordConfirmation}
                    placeholder={TextFieldPlaceholder.RepeatPassword}
                    message={errorMessage ? TextFieldMessage.PasswordMismatch : TextFieldMessage.EmptyField}
                    isError={isError}
                  />
                </div>
                <div className='registration__section'>
                  <ButtonPrimary
                    type={ButtonPrimaryType.Submit}
                    title={ButtonPrimaryTitle.SaveChanges}
                    className='button_large'
                  />
                  <p className='body_large'>
                    <span>После сохранения войдите в библиотеку, используя новый пароль</span>
                  </p>
                </div>
              </fieldset>
            </form>
          )}
        </div>
      )}
    </Fragment>
  );
};
