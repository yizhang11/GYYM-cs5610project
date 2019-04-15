import {Component, OnInit, ViewChild} from '@angular/core';
import {ClassService} from "../../../services/class.service.client";
import {ActivatedRoute} from "@angular/router";
import {SharedService} from "../../../services/shared.service.client";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-class-edit',
  templateUrl: './class-edit.component.html',
  styleUrls: ['./class-edit.component.css']
})
export class ClassEditComponent implements OnInit {

  @ViewChild('f') myClassForm: NgForm;
  coach: any;
  coachId: String;
  classId: String;
  newClass: any;
  currentTime: String;

  constructor(private classService: ClassService, private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.coach = this.sharedService.user;
    this.coachId = this.coach._id;
    console.log(this.coachId);
    this.activatedRoute.params.subscribe((params: any) => {
      this.classId = params['cid'];
      this.classService.findClassById(this.classId).subscribe((newClass: any)=> {
        this.newClass = newClass;
      })
    })

    let today = new Date();
    this.currentTime = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + 'T' + today.getHours() + ":" + today.getMinutes();
  }

  updateClass() {
    this.newClass.approved = new Boolean(false);
    this.classService.updateClass(this.coachId, this.newClass).subscribe((newClass: any) => {
      this.newClass = newClass;
    });
  }

}
