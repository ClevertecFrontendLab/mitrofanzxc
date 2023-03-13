import { DataTestId } from 'constants/data-test-id';

import { FC, Fragment } from 'react';
import { TextFieldMessage } from 'components/text-field/text-field.types';
import { v4 as uuidv4 } from 'uuid';

import './highlight.scss';

export type HighLightProps = {
  value: string[] | TextFieldMessage[];
  title: string;
  className?: string;
  dataTestId?: DataTestId;
};

export const HighLight: FC<HighLightProps> = ({ value, title, className, dataTestId }) => {
  if (!value) {
    return <span className='color_color-grey-black-40'>{title}</span>;
  }

  if (value[0] === title) {
    return <span className='color_negative'>{title}</span>;
  }

  const regexp = RegExp(value.join('|'), 'ig');
  const matchValue = Array.from(title.matchAll(regexp));

  if (matchValue) {
    return (
      <Fragment>
        {title.split(regexp).map((nonBoldText, index, arr) => {
          if (index + 1 !== arr.length) {
            return (
              <Fragment key={uuidv4()}>
                <span className='color_color-grey-black-40'>{nonBoldText}</span>
                <span className={className} data-test-id={dataTestId}>
                  {matchValue[index]}
                </span>
              </Fragment>
            );
          }

          return <span key={uuidv4()}>{nonBoldText}</span>;
        })}
      </Fragment>
    );
  }

  return <span className='color_color-grey-black-40'>{title}</span>;
};
