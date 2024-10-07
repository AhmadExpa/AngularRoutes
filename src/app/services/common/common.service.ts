import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Room } from 'src/app/Interfaces/room.interface';
import { RouteConfigToken } from '../other/route.config.service';
import { RouteConfig } from '../other/route.config.interface';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(
    private _http: HttpClient,
    @Inject(RouteConfigToken) private configToken: RouteConfig
  ) {
    console.log('common service ready');
    console.log(this.configToken);
  }
  getRoom() {
    return this._http.get<Room[]>('api/rooms');
  }
  addRoom(room: Room) {
    return this._http.post<Room>('api/rooms', room);
  }
  bookingService(booking: FormGroup) {
    return this._http.post(
      'https://jsonplaceholder.typicode.com/posts',
      booking
    );
  }

  getComments(): Observable<any> {
    return this._http.get<any>('https://jsonplaceholder.typicode.com/comments');
  }
}
