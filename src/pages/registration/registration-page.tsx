import { Path } from 'constants/path';
import { REGEX_WITH_EMAIL, REGEX_WITH_PASSWORD, REGEX_WITH_PHONE, REGEX_WITH_USERNAME } from 'constants/regex';

import { FC, Fragment, useState } from 'react';
import { Controller, FieldErrors, useForm } from 'react-hook-form';
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
import { registrationSelector } from 'store/selectors';
import { registrationRequest } from 'store/slices';
import { REGISTRATION_REQUEST_WITH_INITIAL_DATA } from 'store/slices/registration/initial-state';
import { RegistrationRequest } from 'store/slices/slices.types';

import { initialState } from './initial-state';

export const RegistrationPage: FC = () => {
  const { isError, isLoading } = useAppSelector(registrationSelector);
  const { handleSubmit, control } = useForm<FormTextField>(initialState);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<RegistrationRequest>(REGISTRATION_REQUEST_WITH_INITIAL_DATA);
  console.log('formData ===', formData);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const dispatch = useAppDispatch();

  const handleForm = (data: FormTextField) => {
    if (step < 3) {
      setFormData({ ...formData, ...data });
      setIsButtonDisabled(false);
      setStep(step + 1);
    } else {
      setFormData({ ...formData, ...data });
      setIsButtonDisabled(false);
      dispatch(registrationRequest(formData));
    }
  };

  const onSubmit = (data: FormTextField) => {
    console.log('onSubmit_DATA ===', data);
    handleForm(data);
  };

  const onError = (error: FieldErrors) => {
    console.log('onError ===', error);
    setIsButtonDisabled(true);
  };

  const buttonPrimaryTitle =
    step === 1 ? ButtonPrimaryTitle.NextStep : step === 2 ? ButtonPrimaryTitle.LastStep : ButtonPrimaryTitle.Register;

  useAuth(Path.Main);

  return (
    <Fragment>
      {isLoading && <Loader dataTestId='loader' />}
      {isError && <FormToast dataTestId='status-block' />}
      {!isError && (
        <div className='registration-bg' data-test-id='auth'>
          <h3 className='h3'>Cleverland</h3>
          <form className='registration' onSubmit={handleSubmit(onSubmit, onError)} data-test-id='register-form'>
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
                      control={control}
                      name={TextFieldId.Username}
                      rules={{ required: true, pattern: REGEX_WITH_USERNAME }}
                      type={TextFieldType.Text}
                      id={TextFieldId.Username}
                      placeholder={TextFieldPlaceholder.CreateUserName}
                      isError={isError}
                      message={TextFieldMessage.CreateUserName}
                    />
                    <TextField
                      control={control}
                      name={TextFieldId.Password}
                      rules={{ required: true, pattern: REGEX_WITH_PASSWORD }}
                      type={TextFieldType.Password}
                      id={TextFieldId.Password}
                      placeholder={TextFieldPlaceholder.Password}
                      isError={isError}
                      message={TextFieldMessage.Password}
                    />
                  </Fragment>
                )}
                {step === 2 && (
                  <Fragment>
                    <TextField
                      control={control}
                      name={TextFieldId.FirstName}
                      rules={{ required: true, pattern: REGEX_WITH_USERNAME }}
                      type={TextFieldType.Text}
                      id={TextFieldId.FirstName}
                      placeholder={TextFieldPlaceholder.FirstName}
                      isError={isError}
                    />
                    <TextField
                      control={control}
                      name={TextFieldId.LastName}
                      rules={{ required: true, pattern: REGEX_WITH_USERNAME }}
                      type={TextFieldType.Text}
                      id={TextFieldId.LastName}
                      placeholder={TextFieldPlaceholder.LastName}
                      isError={isError}
                    />
                  </Fragment>
                )}
                {step === 3 && (
                  <Fragment>
                    {/* <TextField
                      control={control}
                      name={TextFieldId.Phone}
                      rules={{ required: true, pattern: REGEX_WITH_PHONE }}
                      type={TextFieldType.Tel}
                      id={TextFieldId.Phone}
                      placeholder={TextFieldPlaceholder.Phone}
                      isError={isError}
                      message={TextFieldMessage.Phone}
                    /> */}
                    <Controller
                      control={control}
                      name={TextFieldId.Phone}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          control={control}
                          name={TextFieldId.Phone}
                          rules={{ required: true, pattern: REGEX_WITH_PHONE }}
                          type={TextFieldType.Tel}
                          id={TextFieldId.Phone}
                          placeholder={TextFieldPlaceholder.Phone}
                          isError={isError}
                          message={TextFieldMessage.Phone}
                        />
                      )}
                    />
                    <TextField
                      control={control}
                      name={TextFieldId.Email}
                      rules={{ required: true, pattern: REGEX_WITH_EMAIL }}
                      type={TextFieldType.Email}
                      id={TextFieldId.Email}
                      placeholder={TextFieldPlaceholder.Email}
                      isError={isError}
                    />
                  </Fragment>
                )}
              </div>
              <div className='registration__section'>
                <ButtonPrimary
                  type={ButtonPrimaryType.Submit}
                  title={buttonPrimaryTitle}
                  className='button_large'
                  disabled={isButtonDisabled}
                />
                <p className='body_large'>
                  <span>Есть учётная запись?</span>
                  <ButtonLogin title={ButtonLoginTitle.Enter} path={Path.Authorization} />
                </p>
              </div>
            </fieldset>
          </form>
        </div>
      )}
    </Fragment>
  );
};
