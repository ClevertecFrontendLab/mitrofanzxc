import { DataTestId } from 'constants/data-test-id';

import { FC, Fragment } from 'react';
import { TextFieldMessage } from 'components/text-field/text-field.types';
import { v4 as uuidv4 } from 'uuid';

import './highlight.scss';

export type HighLightProps = {
  value: string | TextFieldMessage;
  title: string;
  className?: string;
  dataTestId?: DataTestId;
};

export const HighLight: FC<HighLightProps> = ({ value, title, className, dataTestId }) => {
  if (!value) {
    return <span>{title}</span>;
  }

  const regexp = new RegExp(value, 'gi');
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
                <mark className={className} data-test-id={dataTestId}>
                  {firstMatch}
                </mark>
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
