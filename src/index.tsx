import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { injectStore } from './store/services/cleverland-config';
import { store } from './store/store';
import { App } from './app';

import './index.scss';

injectStore(store);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
