import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { ProductCreateEditComponent } from './product-create-edit/product-create-edit.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductListComponent } from './product-list/product-list.component';

import { ProductService } from './shared/index';
import { AuthService } from './shared/index';

import { AppRoutesModule } from './app-routes/app-routes.module';


@NgModule({
  declarations: [
    AppComponent,
    ProductCreateEditComponent,
    ProductDeleteComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AuthModule
  ],
  providers: [ProductService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
