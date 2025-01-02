import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
  email2 = '';
  password = '';
  validate = false;

  constructor(private router: Router) {}

  onSigIn() {
    this.validate = true;
    console.log('email: ', this.email);
    console.log('password: ', this.password);
    this.router.navigate(['/dashboard']);

  }
}
