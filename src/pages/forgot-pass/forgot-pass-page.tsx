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
import { useAppDispatch, useAppSelector, useAuth, useRedirect } from 'hooks';
import { forgotPassSelector } from 'store/selectors';

import { initialState } from './initial-state';

export const ForgotPassPage: FC = () => {
  const { search } = useLocation();
  const { isError, isLoading, isLetterReceived, isPasswordRecovery } = useAppSelector(forgotPassSelector);
  const { handleSubmit, control } = useForm<FormTextField>(initialState);
  const dispatch = useAppDispatch();

  const onSubmit = (data: FormTextField) => {
    console.log('FORM_DATA ===', data);
  };

  const onError = (error: FieldErrors<FormTextField>) => {
    console.log('FORM_ERRORS ===', error);
  };

  useAuth(Path.Main);
  useRedirect({ path: Path.ForgotPass, searchParams: search });

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
              onSubmit={handleSubmit(onSubmit, onError)}
              data-test-id={DataTestId.SendEmailForm}
            >
              <fieldset className='registration__fieldset'>
                <ButtonLogin title={ButtonLoginTitle.Login} path={Path.Authorization} />
                <div className='registration__section'>
                  <legend className='h4'>Восстановление пароля</legend>
                </div>
                <div className='registration__section'>
                  <TextField
                    control={control}
                    name={TextFieldId.Email}
                    rules={{ required: true, pattern: REGEX_WITH_EMAIL }}
                    type={TextFieldType.Email}
                    id={TextFieldId.Email}
                    placeholder={TextFieldPlaceholder.Email}
                    isError={isError}
                    message={TextFieldMessage.EmailError}
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
              onSubmit={handleSubmit(onSubmit, onError)}
              data-test-id={DataTestId.ResetPasswordForm}
            >
              <fieldset className='registration__fieldset'>
                <div className='registration__section'>
                  <legend className='h4'>Восстановление пароля</legend>
                </div>
                <div className='registration__section'>
                  <TextField
                    control={control}
                    name={TextFieldId.Password}
                    rules={{ required: true, pattern: REGEX_WITH_PASSWORD }}
                    type={TextFieldType.Password}
                    id={TextFieldId.Password}
                    placeholder={TextFieldPlaceholder.NewPassword}
                    isError={isError}
                    message={TextFieldMessage.Password}
                  />
                  <TextField
                    control={control}
                    name={TextFieldId.PasswordConfirmation}
                    rules={{ required: true, pattern: REGEX_WITH_PASSWORD }}
                    type={TextFieldType.Password}
                    id={TextFieldId.PasswordConfirmation}
                    placeholder={TextFieldPlaceholder.RepeatPassword}
                    isError={isError}
                  />
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
            </form>
          )}
        </div>
      )}
    </Fragment>
  );
};
