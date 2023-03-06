import { FC } from 'react';
import { ButtonPrimary } from 'components';
import { ButtonPrimaryType } from 'components/buttons/button-primary/button-primary.types';
import { useAppSelector } from 'hooks';
import { formToastSelector } from 'store/selectors';

import './form-toast.scss';

export type FormToastProps = {
  dataTestId: string;
  onClick?: () => void;
};

export const FormToast: FC<FormToastProps> = ({ dataTestId, onClick }) => {
  const { formToastTitle, formToastMessage, formToastButton } = useAppSelector(formToastSelector);

  return (
    <div className='registration-bg'>
      <h3 className='h3'>Cleverland</h3>
      <div className='registration form-toast' data-test-id={dataTestId}>
        <h4 className='h4'>{formToastTitle}</h4>
        <h3 className='body_large'>{formToastMessage}</h3>
        {formToastButton && (
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
