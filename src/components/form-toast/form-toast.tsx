import { Path } from 'constants/path';

import { FC } from 'react';
import { ButtonLogin } from 'components';
import { ButtonLoginTitle } from 'components/buttons/button-login/button-login.types';

import { FormToastMessage, FormToastTitle } from './form-toast.types';

export type FormToastProps = {
  title: FormToastTitle;
  message: FormToastMessage;
  dataTestId: string;
  buttonTitle?: ButtonLoginTitle;
  path?: Path;
};

export const FormToast: FC<FormToastProps> = ({ title, message, dataTestId, buttonTitle, path }) => (
  <div className='registration-bg'>
    <h3 className='h3'>Cleverland</h3>
    <div className='registration' data-test-id={dataTestId}>
      <h4 className='h4'>{title}</h4>
      <h3 className='h3'>{message}</h3>
      {buttonTitle && path && <ButtonLogin path={path} title={buttonTitle} />}
    </div>
  </div>
);