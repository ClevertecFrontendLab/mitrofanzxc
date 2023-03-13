// import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'app';
import { store } from 'store/store';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  // <StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </StrictMode>
);
