export interface ButtonIcon {
  name: string;
  position?: IconPosition | string;
}

export enum IconPosition {
  LEFT = 'left',
  RIGHT = 'right',
}

export enum ButtonType {
  ELEVATED = 'evelated',
  FILLED = 'filled',
  OUTLINED = 'outlined',
  TEXT = 'text',
}
