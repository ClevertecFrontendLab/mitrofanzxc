import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'store/store';

const selector = (state: RootState) => state;

export const mobileMenuSelector = createSelector(selector, (state) => state.mobileMenu);
