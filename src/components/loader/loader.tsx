import { DataTestId } from 'constants/data-test-id';

import { FC } from 'react';

import './loader.scss';

export type LoaderProps = {
  dataTestId: DataTestId;
};

export const Loader: FC<LoaderProps> = ({ dataTestId }) => (
  <div className='loader' data-test-id={dataTestId}>
    <div className='circle'>
      <svg viewBox='0 0 36 36' className='circle__wrapper stroke_orange'>
        <path
          className='circle__bg'
          d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
        />
        <path
          className='circle__stroke'
          strokeDasharray='60, 100'
          d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
        />
      </svg>
    </div>
  </div>
);
