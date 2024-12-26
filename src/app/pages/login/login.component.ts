import { Component } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { FooterComponent } from '@components/footer/footer.component';
import { ICON_LIST } from '@config/icons.config';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FooterComponent, ButtonComponent, CardComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  icons = ICON_LIST;
}
