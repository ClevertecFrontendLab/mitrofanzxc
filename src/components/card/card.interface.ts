import { ICatalogMockData } from '../../constants';
import { TCatalogView } from '../buttons';

export interface ICard extends ICatalogMockData {
  catalogView: TCatalogView;
}
