import { CatalogView } from 'components/buttons/button-catalog-view/button-catalog-view.types';
import { Sort } from 'utils/utils.types';

import { CatalogState } from '../slices.types';

export const initialState: CatalogState = {
  catalogView: CatalogView.Grid,
  initialData: [],
  catalogData: [],
  catalogSortState: Sort.Descending,
  isLoading: false,
  isError: false,
};
