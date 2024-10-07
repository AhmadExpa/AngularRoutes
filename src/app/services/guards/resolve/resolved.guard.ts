import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CommonService } from '../../common/common.service';

@Injectable({
  providedIn: 'root',
})
export class ResolveGuard implements Resolve<any> {
  constructor(private _COMMON_SERVICE_: CommonService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): any {
    // Fetch data (e.g., from a service)
    
    return this._COMMON_SERVICE_.getComments(); // Return the data as an observable
  }
}
