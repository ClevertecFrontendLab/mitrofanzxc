export type TCatalogView = 'grid' | 'list';

export interface IButtonCatalogView {
  id: TCatalogView;
  value: TCatalogView;
  dataTestId?: string;
}
