import { FC, Fragment, useState } from 'react';
import { RatingStar } from 'components';
import { SpriteId } from 'components/sprite/sprite.types';

export const RateBookRating: FC = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const getColor = (index: number) => {
    if (hoverRating >= index || (!hoverRating && rating >= index)) {
      return SpriteId.StarFill;
    }

    return SpriteId.StarEmpty;
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
};
