import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from '../product-list/product-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'login',
        component: AuthComponent,
        children: [
          { path: 'login', component: LoginComponent },
          { path: 'products', component: ProductListComponent },
          { path: '', redirectTo: 'login', pathMatch: 'full' }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class LoginRoutingModule { }
