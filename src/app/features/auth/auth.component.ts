import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
})
export class AuthComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
