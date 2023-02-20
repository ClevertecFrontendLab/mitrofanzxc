import { FC, Fragment, useMemo, useState } from 'react';

import { RatingStar } from '../rating';

export const ModalRating: FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);

  return useMemo(() => {
    const getColor = (index: number) => {
      if (hoverRating >= index || (!hoverRating && rating >= index)) {
        return 'star-filled';
      }

      return 'star';
    };

    return (
      <Fragment>
        {Array(5)
          .fill(0)
          .map((_, i) => i + 1)
          .map((element) => (
            <RatingStar
              key={element}
              // className='cursor-pointer'
              // spriteId='star'
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
