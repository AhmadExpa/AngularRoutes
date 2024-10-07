import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export class BookingValidation {
  constructor() {}
  static validate(control: AbstractControl): ValidationErrors | null {
    const booking = control.value;
    if (booking.includes('test')) {
      return { invalidName: true };
    }
    return null;
  }
  static validatorChar(char: string): ValidationErrors | null {
    return (control: AbstractControl) => {
      const booking = control.value as string;
      if (booking.includes(char)) {
        return { invalidChar: true };
      }
      return null;
    };
  }
  static validateTime(control: FormGroup): ValidationErrors | null {
    const checkinDate = control.get('checkinDate')?.value as Date;
    const checkoutDate = control.get('checkoutDate')?.value as Date;
    // console.log(checkinDate, checkoutDate);
    if (!checkinDate || !checkoutDate) {
      return null; // Don't validate if dates are not provided
    }
    const diffTime = checkoutDate.getTime() - checkinDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    // console.log(diffTime);
    // console.log(diffDays);
    if (diffDays < 1) {
      control.get('checkoutDate')?.setErrors({ invalidTime: true });
      return { invalidTime: true };
    }
    return null;
  }
}
