import { PatternLogin, PatternPassword } from 'constants/patterns';

import { FC } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { ButtonLogin, ButtonPrimary, TextField } from 'components';
import { ButtonLoginTitle } from 'components/buttons/button-login/button-login.types';
import { ButtonPrimaryTitle, ButtonPrimaryType } from 'components/buttons/button-primary/button-primary.types';
import { FormTextField } from 'components/registration/registration.types';
import {
  TextFieldId,
  TextFieldMessage,
  TextFieldPlaceholder,
  TextFieldType,
} from 'components/text-field/text-field.types';
import { useAppDispatch, useAppSelector, useRequest } from 'hooks';
import { authorizationSelector } from 'store/selectors';
import { authorizationRequest, closePasswordRecovery, openPasswordRecovery, toggleRegistration } from 'store/slices';
import { Connection } from 'store/slices/slices.types';

import './registration.scss';

export const AuthorizationPage: FC = () => {
  const { authorizationRequest } = useAppSelector(authorizationSelector);
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
    dispatch(toggleRegistration());
    dispatch(closePasswordRecovery());
  };

  const handleButtonPasswordRecovery = () => {
    dispatch(openPasswordRecovery());
  };

  useRequest({ connectionType: Connection.Authorization, authorizationData: authorizationRequest });

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
