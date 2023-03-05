import { Path } from 'constants/path';

import { FC } from 'react';
import { ButtonLogin } from 'components';
import { useAppSelector } from 'hooks';
import { formToastSelector } from 'store/selectors';

export type FormToastProps = {
  dataTestId: string;
  path?: Path;
};

export const FormToast: FC<FormToastProps> = ({ dataTestId, path }) => {
  const { formToastTitle, formToastMessage, formToastButton } = useAppSelector(formToastSelector);

  return (
    <div className='registration-bg'>
      <h3 className='h3'>Cleverland</h3>
      <div className='registration' data-test-id={dataTestId}>
        <h4 className='h4'>{formToastTitle}</h4>
        <h3 className='h3'>{formToastMessage}</h3>
        {formToastButton && path && <ButtonLogin path={path} title={formToastButton} />}
      </div>
    </div>
  );
};
