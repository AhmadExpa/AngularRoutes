import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private _LOGINSERVICE_: LoginService) {}

  ngOnInit(): void {
    console.log(this.user);
  }
  user = {
    email: '',
    password: '',
  };
  message!: string;
  onSubmit(loginForm: NgForm) {
    this.user = loginForm.value;
    const role = this._LOGINSERVICE_.login(this.user.email, this.user.password);
    console.log(role);
    if (role === 'admin') {
      this.messageBox('Login Successful', '/admin');
    } else {
      this.messageBox('Unauthorized', '/login');
    }
  }
  messageBox(msg: string, route: string) {
    this.message = msg;
    setTimeout(() => {
      this.message = '';
      this.router.navigate([`${route}`]);
      // this.router.navigateByUrl(`${route}`);
    }, 1500);
  }
}
