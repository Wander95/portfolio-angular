import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from './icons';



@NgModule({
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [IconModule]
})
export class CoreModule { }
