import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from "./services/auth-user.service.client";
import {HomePageComponent} from "./views/home/home-page/home-page.component";
import {IntroPageComponent} from "./views/home/intro-page/intro-page.component";
import {LoginComponent} from "./views/home/login/login.component";
import {RegisterComponent} from "./views/user/register/register.component";
import {UserProfileComponent} from "./views/user/user-profile/user-profile.component";
import {CoachProfileComponent} from "./views/coach/coach-profile/coach-profile.component";
import {AuthCoach} from "./services/auth-coach.service.client";
import {ManageComponent} from "./views/admin/manage/manage.component";
import {AuthAdmin} from "./services/auth-admin.service.client";
import {UserManageComponent} from "./views/admin/user-manage/user-manage.component";
import {CoachManageComponent} from "./views/admin/coach-manage/coach-manage.component";
import {ClassManageComponent} from "./views/admin/class-manage/class-manage.component";
import {ClassListComponent} from "./views/class/class-list/class-list.component";
import {ClassNewComponent} from "./views/class/class-new/class-new.component";
import {ClassEditComponent} from "./views/class/class-edit/class-edit.component";
import {CoachDisplayComponent} from "./views/coach/coach-display/coach-display.component";
import {CoachNewComponent} from "./views/admin/coach-new/coach-new.component";
import {CoachClassComponent} from "./views/coach/coach-class/coach-class.component";

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'home', component: HomePageComponent},
  { path: 'intro', component: IntroPageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: ManageComponent, canActivate: [AuthAdmin]},
  { path: 'user/profile', component: UserProfileComponent, canActivate: [AuthGuard]},
  { path: 'coach/profile', component: CoachProfileComponent, canActivate: [AuthCoach]},
  { path: 'coach/class', component: CoachClassComponent, canActivate: [AuthCoach]},
  { path: 'coach/:cname', component: CoachDisplayComponent },
  { path: 'admin/user', component: UserManageComponent, canActivate: [AuthAdmin]},
  { path: 'admin/coach', component: CoachManageComponent, canActivate: [AuthAdmin]},
  { path: 'admin/coach/:coid', component: CoachNewComponent, canActivate: [AuthAdmin]},
  { path: 'admin/class', component: ClassManageComponent, canActivate: [AuthAdmin]},
  { path: 'class', component: ClassListComponent },
  { path: 'class/new', component: ClassNewComponent, canActivate: [AuthCoach]},
  { path: 'class/:cid', component: ClassEditComponent, canActivate: [AuthCoach]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
