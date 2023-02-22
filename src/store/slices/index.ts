export { setBookData, startBookDataLoading } from './book/book-slice';
export {
  setCatalogData,
  changeCatalogView,
  sortCatalogByRating,
  changeCatalogSortState,
  filterCatalogByCategory,
  searchCatalogByTitle,
  startCatalogDataLoading,
} from './catalog/catalog-slice';
export { setCategoriesData } from './categories/categories-slice';
export { startLoading, endLoading, handleSuccess } from './loader/loader-slice';
export {
  openMobileMenu,
  closeMobileMenu,
  toggleMobileMenu,
  openAccordionMenu,
  closeAccordionMenu,
  toggleAccordionMenu,
} from './mobile-menu/mobile-menu-slice';
export { openModal, closeModal } from './modal/modal-slice';
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
} from './registration/registration-slice';
export { handleIsInputSearchOpen } from './search/search-slice';
export { openToast, closeToast, addErrorToToast, removeErrorFromToast } from './toast/toast-slice';
