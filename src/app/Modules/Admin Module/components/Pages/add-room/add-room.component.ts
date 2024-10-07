import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Room } from 'src/app/Interfaces/room.interface';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss'],
})
export class AddRoomComponent {
  constructor(
    private _COMMON_SERVICE_: CommonService,
    private router: Router
  ) {}

  room: Room = {
    roomNumber: '',
    roomType: '',
    amenities: '',
    price: 0,
    photos: '',
    checkinTime: '',
    checkoutTime: '',
    rating: 0,
  };
  message!: string;

  onSubmit(roomForm: NgForm) {
    this.room = roomForm.value;
    this._COMMON_SERVICE_.addRoom(this.room).subscribe(() => {
      // roomForm.reset(); // resetting the form entirely
      roomForm.reset({
        roomNumber: '',
        roomType: '',
        amenities: '',
        price: 0,
        photos: '',
        checkinTime: '',
        checkoutTime: '',
        rating: 0,
      }); // resetting the form by default values
      this.messageBox('Room added successfully', '/admin'); // Display success message
      (error: any) => {
        this.message = error.message; // Display error message
      };
    });
  }
  messageBox(message: string, route: string) {
    this.message = message;
    setTimeout(() => {
      this.message = '';
    }, 3000);
    this.router.navigate([`${route}`]);
  }
}
