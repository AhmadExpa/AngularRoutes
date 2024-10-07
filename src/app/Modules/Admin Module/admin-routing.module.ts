import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './components/Pages/admin-panel/admin-panel.component';
import { AdminComponent } from './admin.component';
import { AddRoomComponent } from './components/Pages/add-room/add-room.component';
import { ResolveGuard } from 'src/app/services/guards/resolve/resolved.guard';
const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'admin-panel', pathMatch: 'full' },
      {
        path: 'admin-panel',
        component: AdminPanelComponent,
        resolve: {
          data: ResolveGuard,
        },
      },
      { path: 'add-room', component: AddRoomComponent },
      { path: '**', redirectTo: '/404', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
