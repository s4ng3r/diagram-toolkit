export interface ButtonIcon {
  name: string;
  position?: IconPosition | string;
}

export enum IconPosition {
  LEFT = 'left',
  RIGHT = 'right',
}

export enum ButtonVariant {
  ELEVATED = 'elevated',
  FILLED = 'filled',
  OUTLINED = 'outlined',
  TEXT = 'text',
  ICON = 'icon',
}
