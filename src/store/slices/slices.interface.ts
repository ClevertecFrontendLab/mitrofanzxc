import { TCatalogView, TTypeToastError } from '../../components';
import { IBookData, ICatalogData, ICategories } from '../../constants/constants.interface';
import { TTypeSortData } from '../../utils/utils.interface';

export type TConnectionType = '' | 'getCatalog' | 'getBook' | 'getCategories';

export interface ICatalogState extends ILoaderState {
  catalogView: TCatalogView;
  catalogData: ICatalogData[];
  catalogSortState: TTypeSortData;
}

export interface IBookState extends ILoaderState {
  bookData: IBookData;
}

export interface ISearchState {
  inputSearchValue: string;
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

export interface ICategoriesState extends ILoaderState {
  categoriesData: ICategories[];
}
