import { FC, useState } from 'react';

import { ICheckbox } from './checkbox.interface';

import './checkbox.scss';

export const Checkbox: FC<ICheckbox> = ({ id, value }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const [isError, setIsError] = useState<boolean>(false);

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label htmlFor={id} className='checkbox'>
      <input
        id={id}
        type='checkbox'
        name='checkbox'
        value={value}
        disabled={isDisabled}
        checked={isChecked}
        onChange={handleCheckbox}
      />
      <span className={`checkbox__checkmark ${isError ? 'checkbox__checkmark_error' : ''}`} />
    </label>
  );
};
