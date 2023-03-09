import { DataTestId } from 'constants/data-test-id';
import { Path } from 'constants/path';

import { FC, Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
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
import { authorizationSelector } from 'store/selectors';
import { authorizationRequest } from 'store/slices';

import { initialState } from './initial-state';

import './authorization-page.scss';

export const AuthorizationPage: FC = () => {
  const { isError, isLoading, authorizationRequest: formData, errorMessage } = useAppSelector(authorizationSelector);
  const { handleSubmit, control } = useForm<FormTextField>(initialState);
  const dispatch = useAppDispatch();
  console.log('errorMessage ===', errorMessage);

  const onSubmit = (data: FormTextField) => {
    console.log('FORM_DATA ===', data);
    if (data.identifier && data.password) {
      dispatch(authorizationRequest({ identifier: data.identifier, password: data.password }));
    }
  };

  const onRepeat = () => {
    dispatch(authorizationRequest({ identifier: formData.identifier, password: formData.password }));
  };

  useAuth(Path.Main);

  return (
    <Fragment>
      {isLoading && <Loader dataTestId={DataTestId.Loader} />}
      {isError && <FormToast dataTestId={DataTestId.StatusBlock} onClick={onRepeat} />}
      {!isError && (
        <div className='registration-bg' data-test-id={DataTestId.Auth}>
          <h3 className='h3'>Cleverland</h3>
          <div className='registration'>
            <div className='registration__section'>
              <legend className='h4'>Вход в личный кабинет</legend>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} data-test-id={DataTestId.AuthForm}>
              <fieldset className='registration__fieldset'>
                <div className='registration__section'>
                  <TextField
                    control={control}
                    name={TextFieldId.Identifier}
                    rules={{ required: true }}
                    type={TextFieldType.Text}
                    id={TextFieldId.Identifier}
                    placeholder={TextFieldPlaceholder.Login}
                    message={errorMessage ? '' : TextFieldMessage.EmptyField}
                    // isError={isError}
                  />
                  <TextField
                    control={control}
                    name={TextFieldId.Password}
                    rules={{ required: true }}
                    type={TextFieldType.Password}
                    id={TextFieldId.Password}
                    placeholder={TextFieldPlaceholder.Password}
                    // message={errorMessage ? TextFieldMessage.WrongLoginOrPassword : TextFieldMessage.Password}
                    message={errorMessage ? TextFieldMessage.WrongLoginOrPassword : TextFieldMessage.EmptyField}
                    // isError={isError}
                  />
                  <Link to={Path.ForgotPass} className='info_large'>
                    {errorMessage ? ButtonLoginTitle.Restore : ButtonLoginTitle.Forget}
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
        </div>
      )}
    </Fragment>
  );
};
