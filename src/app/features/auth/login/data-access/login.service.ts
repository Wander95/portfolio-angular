import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SignInBody } from '@features/auth/auth.interfaces';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl: string = 'http://localhost:4000/api/v1';

  constructor(private http: HttpClient) {}

  login(body: SignInBody) {
    console.log(body);
    // return this.http.post('http://localhost:4000/api/v1/auth/sign-in', body, {
    //   headers: { 'x-api-key': '', 'x-version': '1', 'x-request-id': '' },
    //   withCredentials: true,
    // });
  }

  signInWithGoogle() {
    // return this.http.get(`${this.baseUrl}auth/google`);
  }
}
