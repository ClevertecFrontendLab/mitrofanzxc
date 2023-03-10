import { DataTestId } from 'constants/data-test-id';
import { Path } from 'constants/path';
import {
  REGEX_WITH_EMAIL,
  REGEX_WITH_NON_EMPTY,
  REGEX_WITH_PASSWORD,
  REGEX_WITH_PHONE,
  REGEX_WITH_USERNAME,
} from 'constants/regex';

import { FC, Fragment, useEffect, useState } from 'react';
import { Controller, FieldErrors, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
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
import { authorizationSelector, formToastSelector, registrationSelector } from 'store/selectors';
import { registrationRequest, registrationReset, setErrorMessage } from 'store/slices';
import { REGISTRATION_REQUEST_WITH_INITIAL_DATA } from 'store/slices/registration/initial-state';
import { RegistrationRequest } from 'store/slices/slices.types';

import { initialState } from './initial-state';

export const RegistrationPage: FC = () => {
  const { isAuth } = useAppSelector(authorizationSelector);
  const { isError, isLoading, isSuccess } = useAppSelector(registrationSelector);
  const { formToastButton, errorMessage } = useAppSelector(formToastSelector);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormTextField>(initialState);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<RegistrationRequest>(REGISTRATION_REQUEST_WITH_INITIAL_DATA);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean | null>(false);
  const [isFieldEmpty, setIsFieldEmpty] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleButton = (value: boolean) => {
    setIsButtonDisabled(value);
  };

  const handleForm = (data: FormTextField) => {
    if (step < 3) {
      setFormData({ ...formData, ...data });
      handleButton(false);
      setStep(step + 1);
    } else {
      setFormData({ ...formData, ...data });
      handleButton(false);
      dispatch(registrationRequest(formData));
    }
  };

  const onSubmit = (data: FormTextField) => {
    handleForm(data);
  };

  const onError = (error: FieldErrors) => {
    console.log('ON_ERROR_REGISTRATION ===', error);
    handleButton(true);
  };

  const handleFormToast = () => {
    switch (formToastButton) {
      case ButtonPrimaryTitle.Entrance:
        navigate(Path.Authorization);
        break;
      case ButtonPrimaryTitle.BackToRegistration:
        dispatch(registrationReset());
        break;
      default:
        dispatch(registrationRequest(formData));
        break;
    }
  };

  const buttonPrimaryTitle =
    step === 1 ? ButtonPrimaryTitle.NextStep : step === 2 ? ButtonPrimaryTitle.LastStep : ButtonPrimaryTitle.Register;

  useAuth(Path.Main, isAuth);

  return (
    <Fragment>
      {isLoading && <Loader dataTestId={DataTestId.Loader} />}
      {(isError || isSuccess) && <FormToast dataTestId={DataTestId.StatusBlock} onClick={handleFormToast} />}
      {!isError && !isSuccess && (
        <div className='registration-bg' data-test-id={DataTestId.Auth}>
          <h3 className='h3'>Cleverland</h3>
          <form
            className='registration'
            onSubmit={handleSubmit(onSubmit, onError)}
            data-test-id={DataTestId.RegisterForm}
          >
            <fieldset className='registration__fieldset'>
              <div className='registration__section'>
                <legend className='h4'>??????????????????????</legend>
                <p className='subtitle_small'>
                  <span>{step}</span> ?????? ???? 3
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
                      message={errorMessage ? TextFieldMessage.EmptyField : TextFieldMessage.CreateUserName}
                      handleButton={handleButton}
                    />
                    <TextField
                      control={control}
                      name={TextFieldId.Password}
                      rules={{ required: true, pattern: REGEX_WITH_PASSWORD }}
                      type={TextFieldType.Password}
                      id={TextFieldId.Password}
                      placeholder={TextFieldPlaceholder.Password}
                      message={errorMessage ? TextFieldMessage.EmptyField : TextFieldMessage.Password}
                      handleButton={handleButton}
                    />
                  </Fragment>
                )}
                {step === 2 && (
                  <Fragment>
                    <TextField
                      control={control}
                      name={TextFieldId.FirstName}
                      rules={{ required: true, pattern: REGEX_WITH_NON_EMPTY }}
                      type={TextFieldType.Text}
                      id={TextFieldId.FirstName}
                      placeholder={TextFieldPlaceholder.FirstName}
                      message=''
                      handleButton={handleButton}
                    />
                    <TextField
                      control={control}
                      name={TextFieldId.LastName}
                      rules={{ required: true, pattern: REGEX_WITH_NON_EMPTY }}
                      type={TextFieldType.Text}
                      id={TextFieldId.LastName}
                      placeholder={TextFieldPlaceholder.LastName}
                      message=''
                      handleButton={handleButton}
                    />
                  </Fragment>
                )}
                {step === 3 && (
                  <Fragment>
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
                          message={TextFieldMessage.Phone}
                          handleButton={handleButton}
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
                      message={TextFieldMessage.EmailError}
                      handleButton={handleButton}
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
                  <span>???????? ?????????????? ?????????????</span>
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
