import { NgModule} from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { AuthGuardService} from './common/services/auth-guard.service';
import { CanDeactivateGuard} from './common/services/can-deactivate-guard.service';

import {LoginComponent} from './login/login.component';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskDetailsComponent} from './task-details/task-details.component';
import {PageNotFoundComponent} from './common/pagenotfound/pagenotfound.component';

const routes:Routes=[
  { path:'login',component:LoginComponent},
  { path:'tasklist',component:TaskListComponent,canActivate:[AuthGuardService]},
  { path:'taskdetails',component:TaskDetailsComponent,canActivate:[AuthGuardService]},
  { path:'', redirectTo : '/login', pathMatch:'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule{

}