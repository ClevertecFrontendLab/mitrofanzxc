import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'store/store';

const selector = (state: RootState) => state;

export const toastSelector = createSelector(selector, (state) => state.toast);
