import { Component } from '@angular/core';
import { ICONS_LIST } from '../icon-list';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  icons = ICONS_LIST;
}
