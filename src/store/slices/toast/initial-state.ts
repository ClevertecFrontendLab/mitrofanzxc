import { ToastMessage, ToastType } from '../../../components/toast/toast.types';
import { ToastState } from '../slices.types';

export const initialState: ToastState = {
  isToastOpen: false,
  toastType: ToastType.Error,
  toastMessage: ToastMessage.DefaultError,
};
