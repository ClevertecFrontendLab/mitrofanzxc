import { Path } from 'constants/path';

import { FC } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout, LayoutMainPage } from 'components';
import { BookPage, MainPage, ProfilePage, RegisterPage, TermsPage } from 'pages';
import { ContentView } from 'pages/terms/terms-page.types';

const App: FC = () => (
  <HashRouter>
    <Routes>
      <Route path={Path.Main} element={<Layout />}>
        <Route element={<LayoutMainPage />}>
          <Route path={Path.Main} element={<Navigate to={Path.BooksAll} />} />
          <Route path={Path.BooksCategory} element={<MainPage />} />
          <Route path={Path.Terms} element={<TermsPage contentView={ContentView.Terms} />} />
          <Route path={Path.Contract} element={<TermsPage contentView={ContentView.Contract} />} />
        </Route>
        <Route path={Path.BookPage} element={<BookPage />} />
        <Route path={Path.Profile} element={<ProfilePage />} />
        <Route path={Path.Register} element={<RegisterPage />} />
      </Route>
    </Routes>
  </HashRouter>
);

export { App };
