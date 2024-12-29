import { Component, Input } from '@angular/core';
import { InputLabel } from './input.interfaces';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() label?: InputLabel;
}
