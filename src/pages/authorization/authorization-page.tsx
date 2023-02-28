import { REGEX_WITH_PASSWORD, REGEX_WITH_USERNAME } from 'constants/regex';

import { FC } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { ButtonLogin, ButtonPrimary, TextField } from 'components';
import { ButtonLoginTitle } from 'components/buttons/button-login/button-login.types';
import { ButtonPrimaryTitle, ButtonPrimaryType } from 'components/buttons/button-primary/button-primary.types';
import {
  FormTextField,
  TextFieldId,
  TextFieldMessage,
  TextFieldPlaceholder,
  TextFieldType,
} from 'components/text-field/text-field.types';
import { useAppDispatch, useAppSelector, useRequest } from 'hooks';
import { authorizationSelector } from 'store/selectors';
import { authorizationRequest, closePasswordRecovery, openPasswordRecovery } from 'store/slices';
import { Connection } from 'store/slices/slices.types';

import './authorization-page.scss';

export const AuthorizationPage: FC = () => {
  const { authorizationRequest, authorizationResponse, isError, isLoading } = useAppSelector(authorizationSelector);
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

  const handleButtonRegistration = () => {
    dispatch(closePasswordRecovery());
  };

  const handleButtonPasswordRecovery = () => {
    dispatch(openPasswordRecovery());
  };

  // useRequest({ connectionType: Connection.Authorization, authorizationData: authorizationRequest });

  return (
    <div className='registration-bg'>
      <h3 className='h3'>Cleverland</h3>
      <form className='registration' onSubmit={handleSubmit(onSubmit, onError)}>
        <fieldset className='registration__fieldset'>
          <div className='registration__section'>
            <legend className='h4'>Вход в личный кабинет</legend>
          </div>
          <div className='registration__section'>
            <TextField
              type={TextFieldType.Text}
              id={TextFieldId.Identifier}
              placeholder={TextFieldPlaceholder.Login}
              {...register(TextFieldId.Identifier, { required: true, pattern: REGEX_WITH_USERNAME })}
            />
            <TextField
              type={TextFieldType.Password}
              id={TextFieldId.Password}
              placeholder={TextFieldPlaceholder.Password}
              message={TextFieldMessage.Password}
              {...register(TextFieldId.Password, { required: true, pattern: REGEX_WITH_PASSWORD })}
            />
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
      </form>
    </div>
  );
};
