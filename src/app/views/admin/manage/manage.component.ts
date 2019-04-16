import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../services/admin.service.client";

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  logout() {
    this.adminService.logout().subscribe();
  }

}
