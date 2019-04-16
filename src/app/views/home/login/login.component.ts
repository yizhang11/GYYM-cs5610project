import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import {UserService} from '../../../services/user.service.client';
import {CoachService} from '../../../services/coach.service.client';
import {AdminService} from '../../../services/admin.service.client';

import {NgForm} from '@angular/forms';
import { ViewChild } from '@angular/core';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') myLoginForm: NgForm;
  username: string;
  password: string;

  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';


  constructor(private router: Router, private _userService: UserService,
              private sharedService: SharedService, private coachService: CoachService,
              private adminService: AdminService) { }

  ngOnInit() {
  }

  login() {

    // fetching data from loginForm
    this.username = this.myLoginForm.value.username;
    this.password = this.myLoginForm.value.password;
    let type = (<HTMLInputElement>document.querySelector('input[name="type"]:checked')).value;

    if (type == 'user') {
      this._userService.login(this.username, this.password)
        .subscribe(
          (user: any) => {
            console.log(user);
            this.sharedService.user = user;
            this.router.navigate(['/user/profile']); },
          (error: any) => {
            console.log(error);
            this.errorFlag = true;
          }
        );
    }
    if (type == 'coach') {
      this.coachService.login(this.username, this.password)
        .subscribe(
          (coach: any) => {
            console.log(coach);
            this.sharedService.user = coach;
            this.router.navigate(['/coach/profile']); },
          (error: any) => {
            console.log(error);
            this.errorFlag = true;
          }
        );
    }

    if (type == 'admin') {
      this.adminService.login(this.username, this.password)
        .subscribe(
          (admin: any) => {
            console.log(admin);
            this.sharedService.user = admin;
            this.router.navigate(['/admin']); },
          (error: any) => {
            console.log(error);
            this.errorFlag = true;
          }
        );
    }

  }

}
