import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from "./app-routing.module";

import { AppComponent } from './app.component';
import {UserService} from "./services/user.service.client";
import {CoachService} from "./services/coach.service.client";
import {AdminService} from "./services/admin.service.client";
import {ClassService} from "./services/class.service.client";
import {AuthGuard} from "./services/auth-user.service.client";
import {AuthAdmin} from "./services/auth-admin.service.client";
import {AuthCoach} from "./services/auth-coach.service.client";
import { HomePageComponent } from './views/home/home-page/home-page.component';
import { IntroPageComponent } from './views/home/intro-page/intro-page.component';
import { RegisterComponent } from './views/user/register/register.component';
import { UserProfileComponent } from './views/user/user-profile/user-profile.component';
import { LoginComponent } from './views/home/login/login.component';
import { CoachProfileComponent } from './views/coach/coach-profile/coach-profile.component';
import { ClassNewComponent } from './views/class/class-new/class-new.component';
import { ClassEditComponent } from './views/class/class-edit/class-edit.component';
import { ClassListComponent } from './views/class/class-list/class-list.component';
import { ManageComponent } from './views/admin/manage/manage.component';
import { ClassManageComponent } from './views/admin/class-manage/class-manage.component';
import { CoachManageComponent } from './views/admin/coach-manage/coach-manage.component';
import { UserManageComponent } from './views/admin/user-manage/user-manage.component';
import { CoachNewComponent } from './views/admin/coach-new/coach-new.component';
import { CoachDisplayComponent } from './views/coach/coach-display/coach-display.component';
import { CoachClassComponent } from './views/coach/coach-class/coach-class.component';
import {SharedService} from "./services/shared.service.client";
import {WeatherService} from "./services/weather.service.client";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    IntroPageComponent,
    RegisterComponent,
    UserProfileComponent,
    LoginComponent,
    CoachProfileComponent,
    ClassNewComponent,
    ClassEditComponent,
    ClassListComponent,
    ManageComponent,
    ClassManageComponent,
    CoachManageComponent,
    UserManageComponent,
    CoachNewComponent,
    CoachDisplayComponent,
    CoachClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, CoachService, AdminService, ClassService, SharedService, AuthGuard, AuthAdmin, AuthCoach, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
