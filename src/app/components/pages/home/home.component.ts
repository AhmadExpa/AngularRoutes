import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  price!: number;
  rooms: any;
  message: string = '';
  subscription: Subscription | undefined;

  constructor(private _COMMON_SERVICE_: CommonService) {}

  getRoom() {
    // Handling success and error
    this.subscription = this._COMMON_SERVICE_.getRoom().subscribe({
      next: (data) => {
        this.rooms = data;
      },
      error: (err) => {
        this.messageBox(err.message); // Display error message
      },
    });
  }

  messageBox(msg: string) {
    this.message = msg;
    // Clear the message box after 3 seconds
    setTimeout(() => {
      this.message = '';
    }, 5000);
  }
  onSearch(event: number) {
    this.price = event;
  }

  ngOnInit(): void {
    this.getRoom();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
