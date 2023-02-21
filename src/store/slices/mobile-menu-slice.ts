import { createSlice } from '@reduxjs/toolkit';

import { TMobileMenuState } from './slices.types';

const initialState: TMobileMenuState = {
  isMobileMenuOpen: false,
  isAccordionMenuOpen: true,
};

export const mobileMenuSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'mobileMenu',
  initialState,
  reducers: {
    openMobileMenu: (state) => {
      state.isMobileMenuOpen = true;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
    },
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    openAccordionMenu: (state) => {
      state.isAccordionMenuOpen = true;
    },
    closeAccordionMenu: (state) => {
      state.isAccordionMenuOpen = false;
    },
    toggleAccordionMenu: (state) => {
      state.isAccordionMenuOpen = !state.isAccordionMenuOpen;
    },
  },
});

export const {
  openMobileMenu,
  closeMobileMenu,
  toggleMobileMenu,
  openAccordionMenu,
  closeAccordionMenu,
  toggleAccordionMenu,
} = mobileMenuSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default mobileMenuSlice.reducer;
