import { Component } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { ICON_LIST } from '@config/icons.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  icons = ICON_LIST;
}
