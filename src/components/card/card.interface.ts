import { ICatalogData } from '../../constants/constants.interface';
import { TCatalogView } from '../buttons';

export interface ICard extends ICatalogData {
  catalogView: TCatalogView;
  currentCategory: string | undefined;
}
