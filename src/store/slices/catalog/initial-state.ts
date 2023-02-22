import { ECatalogView } from '../../../components/buttons/button-catalog-view/button-catalog-view.types';
import { ESort } from '../../../utils/utils.types';
import { TCatalogState } from '../slices.types';

export const initialState: TCatalogState = {
  catalogView: ECatalogView.Grid,
  initialData: [],
  catalogData: [],
  catalogSortState: ESort.Descending,
  isLoading: false,
};
