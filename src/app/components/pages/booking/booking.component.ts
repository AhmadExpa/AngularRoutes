import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  id: number = 0;
  // id$ = this.router.params.pipe(map((params) => params['roomId']));
  constructor(private router: ActivatedRoute) {}
  ngOnInit(): void {
    this.id = this.router.snapshot.params['roomId']; //snapshot
    // this.router.params.subscribe((params) => {
    //   this.id = params['roomId'];
    // }); // reading params whenever it update
    // this.router.paramMap.subscribe((params) => {
    //   this.id = Number(params.get('roomId'));
    // })
  }
}
 