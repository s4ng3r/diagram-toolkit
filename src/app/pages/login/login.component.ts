import { Component } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { FooterComponent } from '@components/footer/footer.component';
import { ICON_LIST } from '@config/icons.config';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FooterComponent, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  icons = ICON_LIST;
}
