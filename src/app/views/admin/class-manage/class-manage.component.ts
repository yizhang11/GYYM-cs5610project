import { Component, OnInit } from '@angular/core';
import {ClassService} from "../../../services/class.service.client";

@Component({
  selector: 'app-class-manage',
  templateUrl: './class-manage.component.html',
  styleUrls: ['./class-manage.component.css']
})
export class ClassManageComponent implements OnInit {

  classes: any;
  constructor(private classService: ClassService) { }

  ngOnInit() {
    this.classService.findAllClass().subscribe((data: any) => {
      this.classes = data;
    })
  }

  approveClass(c: any) {
    c.approved = new Boolean(true);
    this.classService.updateClass(c._id, c).subscribe((data: any) => {
      console.log('class approved' + c.name);
    })
  }

  deleteClass(c: any) {
    this.classService.deleteClass(c._id).subscribe((data: any) => {
      console.log('class deleted' + c.name);
      window.location.reload();
    })
  }

}
