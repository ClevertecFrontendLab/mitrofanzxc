import { Path } from 'constants/path';

import { FC } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout, LayoutMainPage } from 'components';
import { AuthorizationPage, BookPage, ForgotPassPage, MainPage, ProfilePage, RegistrationPage, TermsPage } from 'pages';
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
        <Route path={Path.Authorization} element={<AuthorizationPage />} />
        <Route path={Path.Registration} element={<RegistrationPage />} />
        <Route path={Path.ForgotPass} element={<ForgotPassPage />} />
      </Route>
    </Routes>
  </HashRouter>
);

export { App };
