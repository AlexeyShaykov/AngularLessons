import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { CounterHostComponent }  from './counter/counter-host.component';
import { TimerHostComponent } from './timer-host/timer-host.component';
import { NameCardHostComponent } from './name-card-host/name-card-host.component';
import { MessageBoxHostComponent } from './message-box-host/message-box-host.component';
import { DataBindingComponent } from './data-binding/index';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { UserFormComponent } from './sample-form/index';
import { WikiComponent } from './wiki/wiki.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'counter', component: CounterHostComponent },
  { path: 'timer-host', component: TimerHostComponent },
  { path: 'name-card-host', component: NameCardHostComponent },
  { path: 'message-card-host', component: MessageBoxHostComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'admin', component: AdminHomeComponent },
  { path: 'form', component: UserFormComponent },
  { path: 'wiki', component: WikiComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
