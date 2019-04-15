import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service.client";
import {ActivatedRoute} from "@angular/router";
import {SharedService} from "../../../services/shared.service.client";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: any;
  baseUrl = environment.baseUrl;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private sharedService: SharedService) { }

  updateUser() {
    this.sharedService.user = this.user;
    console.log(this.user);
    return this.userService.updateUser(this.user).subscribe(
      data => console.log('updated' + data)
    );
  }

  deleteUser() {
    return this.userService.deleteUserById(this.user._id).subscribe((user: any) => {
      this.sharedService.user = '';
      console.log('user deleted' + user);
    });
  }

  ngOnInit() {
    this.user = this.sharedService.user;
    console.log('user from sharedService: ' + this.user._id);
    this.userService.findUserById(this.user._id).subscribe(
      (user: any) => {
        this.user = user;
        console.log('user from db: ' + this.user);
      });
    //(<HTMLInputElement>document.getElementById("membership")).readOnly = true;
  }

  logout() {
    this.userService.logout()
      .subscribe();
  }

}
