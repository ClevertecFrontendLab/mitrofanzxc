export type TCatalogView = 'grid' | 'list';

export type TButtonCatalogView = {
  id: TCatalogView;
  value: TCatalogView;
  dataTestId?: string;
};
