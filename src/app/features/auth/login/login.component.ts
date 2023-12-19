import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IconModule } from '@icons/icon.module';
import { ButtonModule } from '@ui/button';
import { SignInBody } from '../auth.interfaces';
import { LoginService } from './data-access/login.service';

@Component({
  imports: [IconModule, ButtonModule, ReactiveFormsModule, CommonModule],
  selector: 'app-login',
  providers: [LoginService],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  validationMessages = {
    email: {
      required: 'Email is required',
      email: 'Please provide a valid email',
    },
    // Add more validation messages as needed for other form controls
  };
  constructor(private loginService: LoginService, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loginForm.setValue({ email: 'admin@email.com', password: '123456789' });
    // this.onSignWithGoogleClick.bind(this);
  }

  onSignWithGoogleClick() {
    console.log(this);
    this.loginService.signInWithGoogle().subscribe((data) => {
      console.log(data);
    });
  }

  login() {
    if (!this.loginForm.value.email) return;
    if (!this.loginForm.value.password) return;

    this.loginService.login(this.loginForm.value as SignInBody).subscribe((data) => console.log(data));
  }
}
