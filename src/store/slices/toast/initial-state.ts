import { EToastMessage, EToastType } from '../../../components/toast/toast.types';
import { TToastState } from '../slices.types';

export const initialState: TToastState = {
  isToastOpen: false,
  toastType: EToastType.Error,
  toastMessage: EToastMessage.DefaultError,
};
