import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { exhaustMap, mergeMap, switchMap } from 'rxjs';
import { CommonService } from 'src/app/services/common/common.service';
import { BookingValidation } from 'src/app/validations/booking.validator/booking-validation';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  constructor(
    private readonly fb: FormBuilder,
    private router: ActivatedRoute,
    private _COMMON_SERVICE_: CommonService,
  ) {
    this.bookingForm = this.fb.group(
      {
        roomId: [{ value: '', disabled: true }],
        guestName: [
          '',
          [BookingValidation.validate, BookingValidation.validatorChar('@')],
        ],
        guestEmail: ['', [Validators.required, Validators.email]],
        guestPhone: ['0300-0000000', [Validators.required]],
        guestCount: [1],
        adults: [1],
        childrens: [0],
        bookingStatus: [{ value: 'Pending', disabled: true }],
        bookingAmount: [''],
        bookingDate: [{ value: this.getFormattedDate(), disabled: true }],
        checkinDate: [new Date()],
        checkoutDate: [new Date()],
        address: this.fb.group({
          guestAddress: [''],
          guestCity: [''],
          guestState: [''],
          guestCountry: [''],
        }),
        guestList: this.fb.array([
          this.fb.group({ guestName: [''], guestAge: [0], guestPhone: [''] }),
        ]),
      },
      { validators: BookingValidation.validateTime }
    );
  }
  id: number = 0;
  bookingForm: FormGroup;
  get guests() {
    return this.bookingForm.get('guestList') as FormArray;
  }
  ngOnInit(): void {
    // Params
    this.id = this.router.snapshot.params['roomId'];
    this.bookingForm.patchValue({
      roomId: this.id,
    });

    // ValueChanges
    // this.bookingForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });

    // RxJs Operators MergeMap, SwitchMap, exhaustMap
    // this.bookingForm.valueChanges
    //   .pipe(exhaustMap((data) => this._COMMON_SERVICE_.bookingService(data)))
    //   .subscribe((value) => {
    //     console.log(value);
    //   });
  }
  submitBooking() {
    if (this.bookingForm.valid) {
      const booking = this.bookingForm.value;
      console.log('Booking Submitted:', booking);
      this.bookingForm.reset();
    } else {
      console.error('Booking Form is invalid!');
    }
  }
  addGuest() {
    // Add guest control
    this.guests.push(
      this.fb.group({ guestName: [''], guestAge: [0], guestPhone: [''] })
    );
  }
  removeGuest(index: number) {
    this.guests.removeAt(index);
  }
  addPassport() {
    // Add passport control
    this.bookingForm.addControl(
      'passport',
      this.fb.group({
        passportNumber: [''],
        passportExpiry: [''],
        passportCountry: [''],
      })
    );
  }
  removePassport() {
    // Remove passport control
    this.bookingForm.removeControl('passport');
  }
  getFormattedDate(): string {
    // Get today's date
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
