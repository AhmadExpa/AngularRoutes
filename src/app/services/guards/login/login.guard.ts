// src/app/can-load.guard.ts

import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { LoginService } from '../../login/login.service';

@Injectable({
  providedIn: 'root',
})
export class CanLoadGuard implements CanLoad {
  constructor(private router: Router, private _LOGINSERVICE_: LoginService) {}
  canLoad(route: Route, segments: UrlSegment[]): boolean {
    // Add your logic here (e.g., check user authentication)
    const isLoggedIn = this._LOGINSERVICE_.isloggedin; // This should be dynamic based on your authentication logic
    if (isLoggedIn) {
      return true; // Allow loading the module
    } else {
      console.warn('Access denied to the feature module.');
      this.router.navigate(['/login']);
      return false; // Block loading the module
    }
  }
}
