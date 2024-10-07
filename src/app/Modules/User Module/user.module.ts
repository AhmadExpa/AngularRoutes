import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

//  --------- Angular Material - Start
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
const angularMaterial = [
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatButtonModule,
  MatNativeDateModule,
  MatSnackBarModule,
];
// ---------- Angular Material - End
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserComponent } from './user.component';
import { BookingComponent } from './components/booking/booking.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [UserComponent, BookingComponent, UserProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    angularMaterial, //Angular Material
  ],
})
export class UserModule {}
