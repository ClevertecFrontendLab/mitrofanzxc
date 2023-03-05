import { Path } from 'constants/path';
import { REGEX_WITH_EMAIL, REGEX_WITH_PASSWORD, REGEX_WITH_PHONE, REGEX_WITH_USERNAME } from 'constants/regex';

import { FC, Fragment, useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { ButtonLogin, ButtonPrimary, FormToast, Loader, TextField } from 'components';
import { ButtonLoginTitle } from 'components/buttons/button-login/button-login.types';
import { ButtonPrimaryTitle, ButtonPrimaryType } from 'components/buttons/button-primary/button-primary.types';
import { FormToastMessage, FormToastTitle } from 'components/form-toast/form-toast.types';
import {
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

export const RegistrationPage: FC = () => {
  const { isError, isLoading } = useAppSelector(registrationSelector);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationRequest>();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<RegistrationRequest>(REGISTRATION_REQUEST_WITH_INITIAL_DATA);
  console.log('formData ===', formData);
  const dispatch = useAppDispatch();

  const handleForm = (data: RegistrationRequest) => {
    if (step < 3) {
      setFormData({ ...formData, ...data });
      setStep(step + 1);
    } else {
      setFormData({ ...formData, ...data });
      dispatch(registrationRequest(formData));
    }
  };

  const onSubmit = (data: RegistrationRequest) => {
    console.log('onSubmit_DATA ===', data);
    handleForm(data);
  };

  const onError = (error: FieldErrors<RegistrationRequest>) => {
    console.log('onError ===', error);
  };

  const buttonPrimaryTitle =
    step === 1 ? ButtonPrimaryTitle.NextStep : step === 2 ? ButtonPrimaryTitle.LastStep : ButtonPrimaryTitle.Register;

  useAuth(Path.Main);

  return (
    <Fragment>
      {isLoading && <Loader />}
      {isError && (
        <FormToast
          title={FormToastTitle.RegistrationError}
          message={FormToastMessage.RegistrationError}
          dataTestId='status-block'
        />
      )}
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
              {/* {step === 1 && (
                <Fragment>
                  <TextField
                    // type={TextFieldType.Text}
                    // id={TextFieldId.Username}
                    // placeholder={TextFieldPlaceholder.CreateUserName}
                    // message={TextFieldMessage.CreateUserName}
                    {...register(TextFieldId.Username, { required: true, pattern: REGEX_WITH_USERNAME })}
                  />
                  <TextField
                    // type={TextFieldType.Password}
                    // id={TextFieldId.Password}
                    // placeholder={TextFieldPlaceholder.Password}
                    // message={TextFieldMessage.Password}
                    {...register(TextFieldId.Password, { required: true, pattern: REGEX_WITH_PASSWORD })}
                  />
                </Fragment>
              )}
              {step === 2 && (
                <Fragment>
                  <TextField
                    // type={TextFieldType.Text}
                    // id={TextFieldId.FirstName}
                    // placeholder={TextFieldPlaceholder.FirstName}
                    {...register(TextFieldId.FirstName, { required: true, pattern: REGEX_WITH_USERNAME })}
                  />
                  <TextField
                    // type={TextFieldType.Text}
                    // id={TextFieldId.LastName}
                    // placeholder={TextFieldPlaceholder.LastName}
                    {...register(TextFieldId.LastName, { required: true, pattern: REGEX_WITH_USERNAME })}
                  />
                </Fragment>
              )}
              {step === 3 && (
                <Fragment>
                  <TextField
                    // type={TextFieldType.Tel}
                    // id={TextFieldId.Phone}
                    // placeholder={TextFieldPlaceholder.Phone}
                    // message={TextFieldMessage.Phone}
                    {...register(TextFieldId.Phone, { required: true, pattern: REGEX_WITH_PHONE })}
                  />
                  <TextField
                    // type={TextFieldType.Email}
                    // id={TextFieldId.Email}
                    // placeholder={TextFieldPlaceholder.Email}
                    {...register(TextFieldId.Email, { required: true, pattern: REGEX_WITH_EMAIL })}
                  />
                </Fragment>
              )} */}
            </div>
            <div className='registration__section'>
              <ButtonPrimary type={ButtonPrimaryType.Submit} title={buttonPrimaryTitle} className='button_large' />
              <p className='body_large'>
                <span>Есть учётная запись?</span>
                <ButtonLogin title={ButtonLoginTitle.Enter} path={Path.Authorization} />
              </p>
            </div>
          </fieldset>
        </form>
      </div>
    </Fragment>
  );
};
