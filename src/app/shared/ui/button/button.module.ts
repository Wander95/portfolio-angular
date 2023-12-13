import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SignInWithButtonComponent } from './sign-in-with-button';



@NgModule({
  imports: [
    CommonModule,
    SignInWithButtonComponent
  ],
  exports: [SignInWithButtonComponent]
})
export class ButtonModule { }
