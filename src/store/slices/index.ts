export { setBookData, startBookDataLoading, endBookDataLoading, handleBookDataSuccess } from './book-slice';
export {
  setCatalogData,
  changeCatalogView,
  sortCatalogByRating,
  changeCatalogSortState,
  filterCatalogByCategory,
  startCatalogDataLoading,
  endCatalogDataLoading,
  handleCatalogDataSuccess,
} from './catalog-slice';
export {
  openMobileMenu,
  closeMobileMenu,
  toggleMobileMenu,
  openAccordionMenu,
  closeAccordionMenu,
  toggleAccordionMenu,
} from './mobile-menu-slice';
export { openModal, closeModal } from './modal-slice';
export {
  openFlow,
  closeFlow,
  openRegistration,
  closeRegistration,
  toggleRegistration,
  openPasswordRecovery,
  closePasswordRecovery,
  openNewPassword,
  closeNewPassword,
  nextStep,
  setTextFieldValue,
  setTextFieldError,
} from './registration-slice';
export { setInputSearchValue, searchCatalogByTitle, handleIsInputSearchOpen } from './search-slice';
export { openToast, closeToast, addErrorToToast, removeErrorFromToast } from './toast-slice';
export type {
  ICatalogState,
  IForm,
  ILoaderState,
  IMobileMenuState,
  IModalState,
  IRegistrationState,
  ITextField,
  IToastState,
} from './slices.interface';
