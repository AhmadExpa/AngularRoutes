import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { BookingComponent } from './components/booking/booking.component';
import { formDeactivateGuard } from 'src/app/services/guards/form.deactivate/form.deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'user', pathMatch: 'full' },
      { path: 'user', component: UserProfileComponent },
      {
        path: 'booking/:roomId',
        component: BookingComponent,
        canDeactivate: [formDeactivateGuard],
      },
      { path: '**', redirectTo: '/404', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
