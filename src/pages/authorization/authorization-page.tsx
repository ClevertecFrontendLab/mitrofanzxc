import { Path } from 'constants/path';
import { REGEX_WITH_PASSWORD, REGEX_WITH_USERNAME } from 'constants/regex';

import { FC, Fragment } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { ButtonLogin, ButtonPrimary, FormToast, Loader, TextField } from 'components';
import { ButtonLoginTitle } from 'components/buttons/button-login/button-login.types';
import { ButtonPrimaryTitle, ButtonPrimaryType } from 'components/buttons/button-primary/button-primary.types';
import { FormToastMessage, FormToastTitle } from 'components/form-toast/form-toast.types';
import {
  FormTextField,
  TextFieldId,
  TextFieldMessage,
  TextFieldPlaceholder,
  TextFieldType,
} from 'components/text-field/text-field.types';
import { useAppDispatch, useAppSelector, useAuth } from 'hooks';
import { authorizationSelector } from 'store/selectors';
import { authorizationRequest } from 'store/slices';
import { AuthorizationRequest } from 'store/slices/slices.types';

import './authorization-page.scss';

// type FormValues = {
//   firstName: string;
//   password: string;
// };

export const AuthorizationPage: FC = () => {
  const { isError, isLoading } = useAppSelector(authorizationSelector);
  const { handleSubmit, control } = useForm<FormTextField>({
    defaultValues: {
      firstName: '',
      password: '',
    },
    mode: 'onChange',
  });
  const dispatch = useAppDispatch();

  const onSubmit = (data: FormTextField) => {
    console.log('FORM_DATA ===', data);
    dispatch(authorizationRequest(data));
  };

  const onError = (error: FieldErrors) => {
    console.log('FORM_ERRORS ===', error);
  };

  useAuth(Path.Main);

  return (
    <Fragment>
      {isLoading && <Loader />}
      {isError && (
        <FormToast
          title={FormToastTitle.AuthorizationError}
          message={FormToastMessage.AuthorizationError}
          dataTestId='status-block'
        />
      )}
      <div className='registration-bg' data-test-id='auth'>
        <h3 className='h3'>Cleverland</h3>
        <form className='registration' onSubmit={handleSubmit(onSubmit, onError)} data-test-id='auth-form'>
          <fieldset className='registration__fieldset'>
            <div className='registration__section'>
              <legend className='h4'>Вход в личный кабинет</legend>
            </div>
            <div className='registration__section'>
              <TextField
                control={control}
                name={TextFieldId.Identifier}
                rules={{ required: true, pattern: REGEX_WITH_USERNAME }}
                type={TextFieldType.Text}
                id={TextFieldId.Identifier}
                placeholder={TextFieldPlaceholder.Login}
                // {...register(TextFieldId.Identifier, { required: true, pattern: REGEX_WITH_USERNAME })}
              />
              <TextField
                control={control}
                name='password'
                rules={{ required: true, pattern: REGEX_WITH_PASSWORD }}
                type={TextFieldType.Password}
                id={TextFieldId.Password}
                placeholder={TextFieldPlaceholder.Password}
                // message={TextFieldMessage.Password}
                // {...register(TextFieldId.Password, { required: true, pattern: REGEX_WITH_PASSWORD })}
              />
              <Link to={Path.ForgotPass} className='info_large'>
                Забыли логин или пароль?
              </Link>
            </div>
            <div className='registration__section'>
              <ButtonPrimary
                type={ButtonPrimaryType.Submit}
                title={ButtonPrimaryTitle.Entrance}
                className='button_large'
              />
              <p className='body_large'>
                <span>Нет учётной записи</span>
                <ButtonLogin title={ButtonLoginTitle.Registration} path={Path.Registration} />
              </p>
            </div>
          </fieldset>
        </form>
      </div>
    </Fragment>
  );
};