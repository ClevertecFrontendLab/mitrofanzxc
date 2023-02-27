import { PatternEmail, PatternPassword } from 'constants/patterns';

import { FC } from 'react';
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
import {
  closePasswordRecovery,
  closeRegistration,
  openPasswordRecovery,
  passwordRecoveryRequest,
  toggleRegistration,
} from 'store/slices';
import { Connection } from 'store/slices/slices.types';

import { FormTextField } from './registration.types';

import './registration.scss';

export const ForgotPassPage: FC = () => {
  const { isPasswordRecovery, isLetterReceived, registrationRequest } = useAppSelector((state) => state.registration);
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

  const handleButtonPersonalAccount = () => {
    dispatch(closePasswordRecovery());
    dispatch(closeRegistration());
  };

  useRequest({ connectionType: Connection.Registration, passwordRecoveryData: passwordRecoveryRequest });

  return (
    <div className='registration-bg'>
      <h3 className='h3'>Cleverland</h3>
      <form className='registration' onSubmit={handleSubmit(onSubmit, onError)}>
        {/* Для восстановления пароля */}
        {isPasswordRecovery && (
          <fieldset className='registration__fieldset'>
            <ButtonLogin title={ButtonLoginTitle.Login} onClick={handleButtonPersonalAccount} />
            <div className='registration__section'>
              <legend className='h4'>Восстановление пароля</legend>
            </div>
            <div className='registration__section'>
              <TextField
                type={TextFieldType.Email}
                id={TextFieldId.Email}
                placeholder={TextFieldPlaceholder.Email}
                message={TextFieldMessage.Email}
                {...register(TextFieldId.Email, { required: true, pattern: PatternEmail })}
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
              <TextField
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
        )}
      </form>
    </div>
  );
};
