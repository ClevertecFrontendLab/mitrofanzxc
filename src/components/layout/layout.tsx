import { FC, Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from 'components';
import { useScrollToTop } from 'hooks';

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
