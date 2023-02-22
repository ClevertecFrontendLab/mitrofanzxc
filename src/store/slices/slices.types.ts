import { ECatalogView } from '../../components/buttons/button-catalog-view/button-catalog-view.types';
import { ETypeToastError } from '../../components/toast/toast.types';
import { TBookData, TCatalogData, TCategories } from '../../constants/constants.types';
import { ESort } from '../../utils/utils.types';

export enum EConnectionType {
  Catalog = 'getCatalog',
  Book = 'getBook',
  Categories = 'getCategories',
}

export type TCatalogState = {
  catalogView: ECatalogView;
  initialData: TCatalogData[];
  catalogData: TCatalogData[];
  catalogSortState: ESort;
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
  typeToastError: ETypeToastError;
};

export type TCategoriesState = {
  categoriesData: TCategories[];
};
