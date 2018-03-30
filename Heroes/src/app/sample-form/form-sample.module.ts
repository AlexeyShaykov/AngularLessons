import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { UserFormComponent } from './index';

@NgModule({
  imports: [
    BrowserModule, FormsModule 
  ],
  declarations: [UserFormComponent]
})
export class FormSampleModule { }
