import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddRoomComponent } from './components/Pages/add-room/add-room.component';
import { AdminPanelComponent } from './components/Pages/admin-panel/admin-panel.component';
import { AdminComponent } from './admin.component';
import { RouteConfigToken } from 'src/app/services/other/route.config.service';

@NgModule({
  declarations: [AddRoomComponent, AdminPanelComponent, AdminComponent],
  imports: [CommonModule, AdminRoutingModule, HttpClientModule, FormsModule],
  providers: [
    {
      provide: RouteConfigToken,
      useValue: { path: 'admin' },
    },
  ],
})
export class AdminModule {
  constructor() {
    console.log('Admin Module Loaded');
  }
}
