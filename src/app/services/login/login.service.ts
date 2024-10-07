import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isloggedin: boolean  = false;
  constructor(private router: Router) {}

  login(email: string, password: string) {
    if (email === 'admin@gmail.com' && password === 'admin123') {
      this.isloggedin = true;
      return "admin";
    }
    return "unknown";
  }
  logout() {
    this.isloggedin = false;
  }
}
