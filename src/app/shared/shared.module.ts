import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '@ui/button';



@NgModule({
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [ButtonModule]
})
export class SharedModule { }
