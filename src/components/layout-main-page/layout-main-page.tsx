import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Nav } from '..';

export const LayoutMainPage: FC = () => (
  <div className='wrapper'>
    <div className='main'>
      <Nav />
      <Outlet />
    </div>
  </div>
);
