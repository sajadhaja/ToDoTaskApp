import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpModule} from '@angular/http'
import {AppRoutingModule} from './app-routing.module';

import {LoginService,} from './common/services/login.service';
import {AlertService} from './common/services/alert.service';
import{ AuthGuardService} from './common/services/auth-guard.service';
import{ CanDeactivateGuard} from './common/services/can-deactivate-guard.service';

import { AppComponent } from './app.component';
import { AlertComponent } from './common/alert/alert.component';
import { LoginComponent } from './login/login.component';
import { TaskListComponent } from './task-list/task-list.component';
import {TaskDetailsComponent} from './task-details/task-details.component';

import { PageNotFoundComponent } from './common/pagenotfound/pagenotfound.component';
import { HeaderComponent } from './common/header/header.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';

import {TaskService} from './common/services/task.service'


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    TaskListComponent,  
    TaskDetailsComponent,  
    PageNotFoundComponent,
    HeaderComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [
    LoginService,
    AuthGuardService,
    CanDeactivateGuard,
    AlertService,
    TaskService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }