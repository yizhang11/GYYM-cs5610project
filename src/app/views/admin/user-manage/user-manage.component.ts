import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service.client";

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css']
})
export class UserManageComponent implements OnInit {

  users: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.findAllUser().subscribe((data:any) =>{
      this.users = data;
    })
  }

  updateUser(user: any){
    this.userService.updateUser(user).subscribe();
  }

}
