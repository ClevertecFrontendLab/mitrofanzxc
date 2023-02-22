import { ETypeToastError } from '../../../components/toast/toast.types';
import { TToastState } from '../slices.types';

export const initialState: TToastState = {
  isToastOpen: false,
  isToastError: false,
  typeToastError: ETypeToastError.Default,
};
