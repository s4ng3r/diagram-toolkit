import { Component, Input, OnInit } from '@angular/core';
import { ButtonIcon, ButtonType, IconPosition } from './button.interface';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent implements OnInit {
  @Input() icon?: ButtonIcon;
  @Input() type: ButtonType | string = ButtonType.FILLED;

  iconPos = 'order-none';
  btnType = 'btn-filled';

  ngOnInit() {
    if (this.icon && !this.icon.position) {
      this.icon.position = IconPosition.LEFT;
    }

    this.iconPos = this.icon?.position === IconPosition.RIGHT ? 'order-2' : 'order-none';
    this.btnType = this.getBtnTypeClass(this.type);
  }

  private getBtnTypeClass(type: ButtonType | string): string {
    switch (type) {
      case ButtonType.ELEVATED:
        return 'btn-elevated';
      case ButtonType.FILLED:
        return 'btn-filled';
      case ButtonType.OUTLINED:
        return 'btn-outlined';
      case ButtonType.TEXT:
        return 'btn-text';
      default:
        return 'btn-filled';
    }
  }
}
