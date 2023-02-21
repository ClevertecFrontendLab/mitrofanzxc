export type TTypeToastError = 'connection' | 'changes' | 'default' | 'rating';

export type TToast = {
  isToastError: boolean;
  typeToastError: TTypeToastError;
  dataTestId: string;
};
