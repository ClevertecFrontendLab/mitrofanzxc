export enum ESpriteId {
  Grid = 'square-four',
  List = 'menu',
  ArrowLong = 'arrow-long-right',
  Sort = 'sort-ascending',
  Cat = 'cat',
  Logo = 'logo',
  Search = 'search',
  Close = 'close',
  ArrowShort = 'arrow-down',
  Check = 'check',
  EyeOpen = 'eye-open',
  EyeClosed = 'eye-closed',
  Warning = 'warning-circle-fill',
  Success = 'check-circle-fill',
  Camera = 'camera',
  Facebook = 'facebook',
  Instagram = 'instagram',
  Vk = 'vk',
  Linkedin = 'linkedin',
  StarEmpty = 'star',
  StarFill = 'star-fill',
}

export type TSprite = {
  id: ESpriteId;
  className: string;
  onClick?: () => void;
  dataTestId?: string;
};
