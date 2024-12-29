import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ButtonIcon, ButtonVariant, IconPosition } from './button.interfaces';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent implements OnInit {
  @Input() icon?: ButtonIcon;
  @Input() variant: ButtonVariant | string = ButtonVariant.FILLED;

  iconPos = 'order-none';
  btnType = 'btn-filled';
  btnStyle = 'primary';

  ngOnInit() {
    if (this.icon && !this.icon.position) {
      this.icon.position = IconPosition.LEFT;
    }

    this.iconPos = this.icon?.position === IconPosition.RIGHT ? 'order-2' : 'order-none';
    this.btnType = this.getBtnTypeClass(this.variant);
  }

  private getBtnTypeClass(variant: ButtonVariant | string): string {
    const variantClasses: Record<string, string> = {
      [ButtonVariant.ELEVATED]: 'btn-elevated',
      [ButtonVariant.FILLED]: 'btn-filled',
      [ButtonVariant.OUTLINED]: 'btn-outlined',
      [ButtonVariant.TEXT]: 'btn-text',
      [ButtonVariant.ICON]: 'btn-icon',
    };
  
    return variantClasses[variant] || 'btn-filled';
  }
}
