import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminQuardService } from '../admin-quard.service';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminHomeComponent,
        canActivate: [AdminQuardService],
        children: [
          { path: 'users', component: ManageUsersComponent },
          { path: '', redirectTo: 'users', pathMatch: 'full' }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AdminRoutingModule { }
