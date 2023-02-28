import { REGEX_WITH_EMAIL, REGEX_WITH_PASSWORD, REGEX_WITH_PHONE, REGEX_WITH_USERNAME } from 'constants/regex';

import { FC, Fragment, useState } from 'react';
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
import { registrationSelector } from 'store/selectors';
import { closePasswordRecovery } from 'store/slices';
import { Connection } from 'store/slices/slices.types';

export const RegistrationPage: FC = () => {
  const { isError, isLoading, registrationRequest, registrationResponse } = useAppSelector(registrationSelector);
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
    dispatch(closePasswordRecovery());
  };

  // useRequest({ connectionType: Connection.Registration, registrationData: registrationRequest });

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
                  id={TextFieldId.Username}
                  placeholder={TextFieldPlaceholder.CreateUserName}
                  message={TextFieldMessage.CreateUserName}
                  {...register(TextFieldId.Username, { required: true, pattern: REGEX_WITH_USERNAME })}
                />
                <TextField
                  type={TextFieldType.Password}
                  id={TextFieldId.Password}
                  placeholder={TextFieldPlaceholder.Password}
                  message={TextFieldMessage.Password}
                  {...register(TextFieldId.Password, { required: true, pattern: REGEX_WITH_PASSWORD })}
                />
              </Fragment>
            )}
            {step === 2 && (
              <Fragment>
                <TextField
                  type={TextFieldType.Text}
                  id={TextFieldId.FirstName}
                  placeholder={TextFieldPlaceholder.FirstName}
                  {...register(TextFieldId.FirstName, { required: true, pattern: REGEX_WITH_USERNAME })}
                />
                <TextField
                  type={TextFieldType.Text}
                  id={TextFieldId.LastName}
                  placeholder={TextFieldPlaceholder.LastName}
                  {...register(TextFieldId.LastName, { required: true, pattern: REGEX_WITH_USERNAME })}
                />
              </Fragment>
            )}
            {step === 3 && (
              <Fragment>
                <TextField
                  type={TextFieldType.Tel}
                  id={TextFieldId.Phone}
                  placeholder={TextFieldPlaceholder.Phone}
                  message={TextFieldMessage.Phone}
                  {...register(TextFieldId.Phone, { required: true, pattern: REGEX_WITH_PHONE })}
                />
                <TextField
                  type={TextFieldType.Email}
                  id={TextFieldId.Email}
                  placeholder={TextFieldPlaceholder.Email}
                  {...register(TextFieldId.Email, { required: true, pattern: REGEX_WITH_EMAIL })}
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
