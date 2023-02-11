// import { handleLoading, handleSuccess } from '../store/slices';
// import { store } from '../store/store';

import { IInterceptRequest } from './utils.interface';

export const interceptRequest: IInterceptRequest = ({ isLoading, isSuccess }) => {
  // store.dispatch(handleLoading(isLoading));
  // store.dispatch(handleSuccess(isSuccess));
  console.log('123');
};
