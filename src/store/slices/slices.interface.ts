import { TCatalogView, TTypeToastError } from '../../components';
import { IBookData, ICatalogData, ICategories } from '../../constants/constants.interface';
import { TTypeSortData } from '../../utils/utils.interface';

export type TConnectionType = '' | 'getCatalog' | 'getBook' | 'getCategories';

export interface ICatalogState {
  catalogView: TCatalogView;
  initialData: ICatalogData[];
  catalogData: ICatalogData[];
  catalogSortState: TTypeSortData;
  isLoading: boolean;
}

export interface IBookState {
  bookData: IBookData;
  isLoading: boolean;
}

export interface ISearchState {
  isInputSearchOpen: boolean;
}

export interface ILoaderState {
  isLoading: boolean;
  isSuccess: boolean;
}

export interface IMobileMenuState {
  isMobileMenuOpen: boolean;
  isAccordionMenuOpen: boolean;
}

export interface IModalState {
  isModalOpen: boolean;
}

export interface ITextField {
  isError: boolean;
  value: string;
}

export interface IForm {
  login: ITextField;
  password: ITextField;
  firstName: ITextField;
  lastName: ITextField;
  phone: ITextField;
  email: ITextField;
  contractNumber: ITextField;
  contractOwner: ITextField;
}

export interface IRegistrationState {
  isFlowOpen: boolean;
  isRegistration: boolean;
  isPasswordRecovery: boolean;
  isLetterReceived: boolean;
  formStep: number;
  form: IForm;
}

export interface IToastState {
  isToastOpen: boolean;
  isToastError: boolean;
  typeToastError: TTypeToastError;
}

export interface ICategoriesState {
  categoriesData: ICategories[];
}
