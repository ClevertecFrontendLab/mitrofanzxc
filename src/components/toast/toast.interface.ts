export type TTypeToastError = 'connection' | 'changes' | 'default' | 'rating';

export interface IToast {
  isToastError: boolean;
  typeToastError: TTypeToastError;
  dataTestId: string;
}
