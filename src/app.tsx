import { FC } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { EContentView } from './pages/terms/terms-page.types';
import { Layout, LayoutMainPage } from './components';
import { PATHS } from './constants';
import { BookPage, MainPage, ProfilePage, TermsPage } from './pages';

const App: FC = () => {
  const { main, booksAll, booksCategory, bookPage, profile, terms, contract } = PATHS;

  return (
    <HashRouter>
      <Routes>
        <Route path={main} element={<Layout />}>
          <Route element={<LayoutMainPage />}>
            <Route path={main} element={<Navigate to={booksAll} />} />
            <Route path={booksCategory} element={<MainPage />} />
            <Route path={terms} element={<TermsPage contentView={EContentView.Terms} />} />
            <Route path={contract} element={<TermsPage contentView={EContentView.Contract} />} />
          </Route>
          <Route path={bookPage} element={<BookPage />} />
          <Route path={profile} element={<ProfilePage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export { App };
