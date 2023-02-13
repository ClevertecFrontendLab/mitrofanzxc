import { FC, Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import { useScrollToTop } from '../../hooks';
import { Footer, Header } from '..';

export const Layout: FC = () => {
  useScrollToTop();

  return (
    <Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};
