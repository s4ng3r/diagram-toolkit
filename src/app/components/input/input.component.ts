import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputLabel } from './input.interfaces';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() label?: InputLabel;

  private _value = '';

  get value() {
    return this._value;
  }
  set value(val) {
    this._value = val;
    this.onChange(val);
  }

  onChange!: (val: string) => void;
  onTouched!: (val: string) => void;

  handleInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
  }

  writeValue(value: string): void {
    if (value !== this._value) {
      this._value = value;
    }
  }

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
