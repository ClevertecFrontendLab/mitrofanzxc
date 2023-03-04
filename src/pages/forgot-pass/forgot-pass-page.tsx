import { Path } from 'constants/path';
import { REGEX_WITH_EMAIL, REGEX_WITH_PASSWORD } from 'constants/regex';

import { FC, Fragment } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { ButtonLogin, ButtonPrimary, Loader, TextField, Toast } from 'components';
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
import { forgotPassSelector } from 'store/selectors';

export const ForgotPassPage: FC = () => {
  const { isError, isLoading, isLetterReceived, isPasswordRecovery } = useAppSelector(forgotPassSelector);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTextField>();
  const dispatch = useAppDispatch();

  const onSubmit = (data: FormTextField) => {
    console.log('FORM_DATA ===', data);
  };

  const onError = (error: FieldErrors<FormTextField>) => {
    console.log('FORM_ERRORS ===', error);
  };

  useAuth(Path.Main);

  return (
    <Fragment>
      {isLoading && <Loader />}
      {isError && <Toast dataTestId='status-block' />}
      <div className='registration-bg' data-test-id='auth'>
        <h3 className='h3'>Cleverland</h3>
        {/* Для восстановления пароля */}
        {isPasswordRecovery && (
          <form className='registration' onSubmit={handleSubmit(onSubmit, onError)} data-test-id='send-email-form'>
            <fieldset className='registration__fieldset'>
              <ButtonLogin title={ButtonLoginTitle.Login} path={Path.Authorization} />
              <div className='registration__section'>
                <legend className='h4'>Восстановление пароля</legend>
              </div>
              <div className='registration__section'>
                {/* <TextField
                  // type={TextFieldType.Email}
                  // id={TextFieldId.Email}
                  // placeholder={TextFieldPlaceholder.Email}
                  // message={TextFieldMessage.Email}
                  {...register(TextFieldId.Email, { required: true, pattern: REGEX_WITH_EMAIL })}
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
                  <ButtonLogin title={ButtonLoginTitle.Registration} path={Path.Registration} />
                </p>
              </div>
            </fieldset>
          </form>
        )}

        {/* Для нового пароля по ссылке из почты */}
        {isLetterReceived && (
          <form className='registration' onSubmit={handleSubmit(onSubmit, onError)} data-test-id='reset-password-form'>
            <fieldset className='registration__fieldset'>
              <div className='registration__section'>
                <legend className='h4'>Восстановление пароля</legend>
              </div>
              <div className='registration__section'>
                {/* <TextField
                  // type={TextFieldType.Password}
                  // id={TextFieldId.Password}
                  // placeholder={TextFieldPlaceholder.NewPassword}
                  // message={TextFieldMessage.Password}
                  {...register(TextFieldId.Password, { required: true, pattern: REGEX_WITH_PASSWORD })}
                />
                <TextField
                  // type={TextFieldType.Password}
                  // id={TextFieldId.Password}
                  // placeholder={TextFieldPlaceholder.RepeatPassword}
                  {...register(TextFieldId.PasswordConfirmation, { required: true, pattern: REGEX_WITH_PASSWORD })}
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
          </form>
        )}
      </div>
    </Fragment>
  );
};
