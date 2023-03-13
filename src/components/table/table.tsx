import { TABLE_HEADER_LIST } from 'constants/table-header-list';

import { FC } from 'react';
import { translateCategoryTitle } from 'utils';
import { Language, TArrayDivideTableData } from 'utils/utils.types';
import { v4 as uuidv4 } from 'uuid';

import './table.scss';

export type TableProps = {
  data: TArrayDivideTableData | null;
};

export const Table: FC<TableProps> = ({ data }) => (
  <table className='table'>
    <tbody>
      {data &&
        data.length > 0 &&
        data.map((element) => (
          <tr key={uuidv4()}>
            <th className='subtitle_large color-grey-black-40'>
              {element[0] ? translateCategoryTitle(TABLE_HEADER_LIST, Language.En, element[0]) : 'Категория'}
            </th>
            <td className='body_large'>{element[1] || 'Неизвестно'}</td>
          </tr>
        ))}
    </tbody>
  </table>
);
