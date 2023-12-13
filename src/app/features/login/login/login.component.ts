import { Component } from '@angular/core';
import { ButtonModule } from '@ui/button';
import { IconModule } from 'src/app/core/icons/icon.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IconModule, ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
