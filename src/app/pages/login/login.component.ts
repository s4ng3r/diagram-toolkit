import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '@components/button/button.component';
import { FooterComponent } from '@components/footer/footer.component';
import { InputComponent } from '@components/input/input.component';
import { ICON_LIST } from '@config/icons.config';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FooterComponent, ButtonComponent, CardComponent, InputComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  icons = ICON_LIST;

  email = '';
  password = '';

  onSigIn() {
    console.log('email: ', this.email);
    console.log('password: ', this.password);
  }
}
