import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';

import { WikiComponent } from './wiki.component';
import { WikiService } from './wiki.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule, JsonpModule
  ],
  declarations: [WikiComponent],
  providers: [WikiService]
})
export class WikiModule { }
