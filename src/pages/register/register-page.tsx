import { PatternEmail, PatternLogin, PatternPassword, PatternTel } from 'constants/patterns';

import { FC, Fragment, useState } from 'react';
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
import { registrationSelector } from 'store/selectors';
import { closePasswordRecovery, toggleRegistration } from 'store/slices';
import { Connection } from 'store/slices/slices.types';

export const RegisterPage: FC = () => {
  const { registrationRequest } = useAppSelector(registrationSelector);
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

  useRequest({ connectionType: Connection.Registration, registrationData: registrationRequest });

  const buttonPrimaryTitle =
    step === 1 ? ButtonPrimaryTitle.NextStep : step === 2 ? ButtonPrimaryTitle.LastStep : ButtonPrimaryTitle.Register;

  return (
    <div className='registration-bg'>
      <h3 className='h3'>Cleverland</h3>
      <form className='registration' onSubmit={handleSubmit(onSubmit, onError)}>
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
      </form>
    </div>
  );
};
