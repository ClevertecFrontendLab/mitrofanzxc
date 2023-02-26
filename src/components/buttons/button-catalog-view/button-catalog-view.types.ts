export enum ECatalogView {
  Grid = 'grid',
  List = 'list',
}

export type TButtonCatalogView = {
  id: ECatalogView;
  value: ECatalogView;
  dataTestId?: string;
};
