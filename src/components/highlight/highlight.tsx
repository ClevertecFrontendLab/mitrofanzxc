import { FC, Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { IHighLight } from './highlight.interface';

import './highlight.scss';

export const HighLight: FC<IHighLight> = ({ inputSearchValue, title }) => {
  if (!inputSearchValue) {
    return <span>{title}</span>;
  }

  const regexp = new RegExp(inputSearchValue, 'gi');
  const matchValue = title.match(regexp);

  if (matchValue) {
    return (
      <Fragment>
        {title.split(regexp).map((str, index, array) => {
          if (index < array.length - 1) {
            const firstMatch = matchValue.shift();

            return (
              <Fragment key={uuidv4()}>
                {str}
                <mark>{firstMatch}</mark>
              </Fragment>
            );
          }

          return <Fragment key={uuidv4()}>{str}</Fragment>;
        })}
      </Fragment>
    );
  }

  return <span>{title}</span>;
};
