import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroService }          from './hero.service';
import { MessageService }       from './message.service';
import { AdminQuardService } from './admin-quard.service';

import { MessagesComponent }    from './messages/messages.component';

import { DataBindingModule } from './data-binding/data-binding.module';

import { AppRoutingModule }     from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { FormSampleModule } from './sample-form/form-sample.module';
import { SampleFormModelDrivenModule } from './sample-form-model-driven/sample-form-model-driven.module';
import { WikiModule } from './wiki/wiki.module';

import { HeroSeacrhComponent } from './hero-seacrh/hero-seacrh.component';
import { CounterHostComponent } from './counter/counter-host.component';
import { CounterComponent } from './counter/counter.component';
import { TimerHostComponent } from './timer-host/timer-host.component';
import { TimerComponent } from './timer/timer.component';
import { NameCardComponent } from './name-card/name-card.component';
import { NameCardHostComponent } from './name-card-host/name-card-host.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { MessageBoxHostComponent } from './message-box-host/message-box-host.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DataBindingModule,
    AdminModule,
    FormSampleModule,
    SampleFormModelDrivenModule,
    WikiModule,

    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSeacrhComponent,
    CounterHostComponent,
    CounterComponent,
    TimerHostComponent,
    TimerComponent,
    NameCardComponent,
    NameCardHostComponent,
    MessageBoxComponent,
    MessageBoxHostComponent
  ],
  providers: [ HeroService, MessageService, AdminQuardService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
