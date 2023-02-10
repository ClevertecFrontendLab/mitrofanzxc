export {
  changeCatalogView,
  sortCatalogByRating,
  changeCatalogSortState,
  filterCatalogByCategory,
  setInputSearchValue,
  searchCatalogByTitle,
  handleIsInputSearchOpen,
} from './catalog-slice';
export { openToast, closeToast, addErrorToToast, removeErrorFromToast } from './toast-slice';
export {
  openMobileMenu,
  closeMobileMenu,
  toggleMobileMenu,
  openAccordionMenu,
  closeAccordionMenu,
  toggleAccordionMenu,
} from './mobile-menu-slice';
export { handleLoading, handleSuccess } from './loader-slice';
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
export { openModal, closeModal } from './modal-slice';
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
