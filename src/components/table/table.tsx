import { FC } from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { v4 as uuidv4 } from 'uuid';

import { TableHeaderMockData } from '../../constants';
import { translateCategoryTitle } from '../../utils';

import { ITable } from './table.interface';

import './table.scss';

export const Table: FC<ITable> = ({ data }) => (
  <table className='table'>
    <tbody>
      {data &&
        data.length > 0 &&
        data.map((element) => (
          <tr key={uuidv4()}>
            <th className='subtitle_large color-grey-black-40'>
              {element[0] ? translateCategoryTitle(element[0], TableHeaderMockData, 'ru') : 'Категория'}
            </th>
            <td className='body_large'>{element[1] || 'Неизвестно'}</td>
          </tr>
        ))}
    </tbody>
  </table>
);
