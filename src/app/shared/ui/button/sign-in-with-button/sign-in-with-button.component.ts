import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'sign-in-with-button',
  standalone: true,
  imports: [],
  templateUrl: './sign-in-with-button.component.html',
  styleUrl: './sign-in-with-button.component.css',
})
export class SignInWithButtonComponent {
  @HostBinding('class')
  @Input()
  label: string = 'nothing defined here';

  @Input() onButtonClick: any = () => {};

  constructor() {}

  onCLick() {
    this.onButtonClick();
  }
  private twClasses = 'bg-sky-500';
}
