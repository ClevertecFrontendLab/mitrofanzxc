import { TCatalogView, TTypeToastError } from '../../components';
import { TBookData, TCatalogData, TCategories } from '../../constants/constants.types';
import { TTypeSortData } from '../../utils/utils.types';

export type TConnectionType = '' | 'getCatalog' | 'getBook' | 'getCategories';

export type TCatalogState = {
  catalogView: TCatalogView;
  initialData: TCatalogData[];
  catalogData: TCatalogData[];
  catalogSortState: TTypeSortData;
  isLoading: boolean;
};

export type TBookState = {
  bookData: TBookData;
  isLoading: boolean;
};

export type TSearchState = {
  isInputSearchOpen: boolean;
};

export type TLoaderState = {
  isLoading: boolean;
  isSuccess: boolean;
};

export type TMobileMenuState = {
  isMobileMenuOpen: boolean;
  isAccordionMenuOpen: boolean;
};

export type TModalState = {
  isError: boolean;
};

export type TTextField = {
  isError: boolean;
  value: string;
};

export type TForm = {
  login: TTextField;
  password: TTextField;
  firstName: TTextField;
  lastName: TTextField;
  phone: TTextField;
  email: TTextField;
  contractNumber: TTextField;
  contractOwner: TTextField;
};

export type TRegistrationState = {
  isFlowOpen: boolean;
  isRegistration: boolean;
  isPasswordRecovery: boolean;
  isLetterReceived: boolean;
  formStep: number;
  form: TForm;
};

export type TToastState = {
  isToastOpen: boolean;
  isToastError: boolean;
  typeToastError: TTypeToastError;
};

export type TCategoriesState = {
  categoriesData: TCategories[];
};
