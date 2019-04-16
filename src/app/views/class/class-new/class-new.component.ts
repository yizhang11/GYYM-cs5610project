import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from "@angular/router";
import {SharedService} from "../../../services/shared.service.client";
import {ClassService} from "../../../services/class.service.client";

@Component({
  selector: 'app-class-new',
  templateUrl: './class-new.component.html',
  styleUrls: ['./class-new.component.css']
})
export class ClassNewComponent implements OnInit {

  @ViewChild('f') myClassForm: NgForm;
  coach: any;
  coachId: String;
  newClass: any;
  currentTime: String;

  constructor(private classService: ClassService, private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) { }

  createClass() {
    this.newClass = {
      name: this.myClassForm.value.classname,
      description: this.myClassForm.value.description,
      _coach: this.coachId,
      coachName: this.coach.firstName + ' ' + this.coach.lastName,
      coachUrl: '/coach/' + this.coach.username,
      time: (<HTMLInputElement>document.querySelector('input[type="datetime-local"]')).value,
      location: 'TBD',
      weather: "https://openweathermap.org/img/w/01d.png",
      approved: new Boolean(false),
    };
    this.classService.createClass(this.coachId, this.newClass).subscribe((newClass: any) => {
      this.newClass = newClass;
    });
  }

  ngOnInit() {
    this.coach = this.sharedService.user;
    this.coachId = this.coach._id;
    console.log(this.coachId);
    let today = new Date();
    this.currentTime = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + 'T' + today.getHours() + ":" + today.getMinutes();
  }
}
