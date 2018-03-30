import { NgModule } from '@angular/core';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    AdminRoutingModule
  ],
  declarations: [ManageUsersComponent, AdminHomeComponent]
})
export class AdminModule { }
