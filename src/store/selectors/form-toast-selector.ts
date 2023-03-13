import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'store/store';

const selector = (state: RootState) => state;

export const formToastSelector = createSelector(selector, (state) => state.formToast);
