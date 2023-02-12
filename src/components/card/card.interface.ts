import { ICatalogData } from '../../constants';
import { TCatalogView } from '../buttons';

export interface ICard extends ICatalogData {
  catalogView: TCatalogView;
  currentCategory: string | undefined;
}
