import { FC, Fragment, useMemo, useState } from 'react';

import { RatingStar } from '../rating';
import { EStar } from '../rating/rating.types';

export const ModalRating: FC = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  return useMemo(() => {
    const getColor = (index: number) => {
      if (hoverRating >= index || (!hoverRating && rating >= index)) {
        return EStar.Fill;
      }

      return EStar.Empty;
    };

    return (
      <Fragment>
        {Array(5)
          .fill(0)
          .map((_, i) => i + 1)
          .map((element) => (
            <RatingStar
              key={element}
              onClick={() => setRating(element)}
              spriteId={getColor(element)}
              onMouseEnter={() => setHoverRating(element)}
              onMouseLeave={() => setHoverRating(0)}
            />
          ))}
      </Fragment>
    );
  }, [rating, hoverRating]);
};
