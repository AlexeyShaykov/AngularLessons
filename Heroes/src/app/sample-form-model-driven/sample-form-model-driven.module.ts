import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms'
import { SampleFormModelDrivenComponent } from './sample-form-model-driven.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SampleFormModelDrivenComponent]
})
export class SampleFormModelDrivenModule { }
