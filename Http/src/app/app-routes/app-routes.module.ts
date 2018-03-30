import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from '../product-list/product-list.component';
import { ProductCreateEditComponent } from '../product-create-edit/product-create-edit.component';
import { ProductDeleteComponent } from '../product-delete/product-delete.component';
import { LoginComponent } from '../auth/login/login.component';

import { AuthService } from '../shared/auth.service';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent, canActivate: [AuthService] },
  { path: 'login', component: LoginComponent },
  { path: 'product/edit/:id', component:  ProductCreateEditComponent},
  { path: 'product/create', component: ProductCreateEditComponent},
  { path: 'product/delete/:id', component: ProductDeleteComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutesModule { }
