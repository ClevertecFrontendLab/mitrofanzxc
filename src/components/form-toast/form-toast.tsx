import { DataTestId } from 'constants/data-test-id';
import { Path } from 'constants/path';

import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { ButtonPrimary } from 'components';
import { ButtonPrimaryType } from 'components/buttons/button-primary/button-primary.types';
import { useAppSelector } from 'hooks';
import { formToastSelector } from 'store/selectors';

import './form-toast.scss';

export type FormToastProps = {
  dataTestId: DataTestId;
  path?: Path;
  onClick?: () => void;
};

export const FormToast: FC<FormToastProps> = ({ dataTestId, path, onClick }) => {
  const { pathname } = useLocation();
  const { formToastTitle, formToastMessage, formToastButton } = useAppSelector(formToastSelector);

  return (
    <div className='registration-bg' data-test-id={DataTestId.Auth}>
      <h3 className='h3'>Cleverland</h3>
      <div className='registration form-toast' data-test-id={dataTestId}>
        <h4 className='h4'>{formToastTitle}</h4>
        <h3 className='body_large'>{formToastMessage}</h3>
        {formToastButton && pathname === Path.Registration && (
          <ButtonPrimary type={ButtonPrimaryType.Link} className='button_large' title={formToastButton} path={path} />
        )}
        {formToastButton && pathname !== Path.Registration && (
          <ButtonPrimary
            type={ButtonPrimaryType.Primary}
            className='button_large'
            title={formToastButton}
            onClick={onClick}
          />
        )}
      </div>
    </div>
  );
};
