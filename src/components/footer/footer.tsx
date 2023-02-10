import { FC } from 'react';

import { SocialsMockData } from '../../constants';
import { Sprite } from '..';

import './footer.scss';

export const Footer: FC = () => (
  <footer className='footer'>
    <div className='wrapper'>
      <div className='footer__wrapper'>
        <span className='body_large'>© 2020-2023 Cleverland. Все права защищены.</span>
        <ul className='socials'>
          {SocialsMockData &&
            SocialsMockData.map(({ id, link, src }) => (
              <li key={id}>
                <a href={link} target='_blank' rel='noopener noreferrer' className='socials__link'>
                  <Sprite id={src} className='socials__logo' />
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  </footer>
);
