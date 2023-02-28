import { Path } from 'constants/path';

import { FC } from 'react';
import { ButtonLogin } from 'components';
import { ButtonLoginTitle } from 'components/buttons/button-login/button-login.types';

import { FormToastMessage, FormToastTitle } from './form-toast.types';

export type FormToastProps = {
  title: FormToastTitle;
  message: FormToastMessage;
  buttonTitle?: ButtonLoginTitle;
  path?: Path;
};

export const FormToast: FC<FormToastProps> = ({ title, message, buttonTitle, path }) => (
  <div className='registration-bg'>
    <h3 className='h3'>Cleverland</h3>
    <div className='registration'>
      <h4 className='h4'>{title}</h4>
      <h3 className='h3'>{message}</h3>
      {buttonTitle && path && <ButtonLogin path={path} title={buttonTitle} />}
    </div>
  </div>
);
