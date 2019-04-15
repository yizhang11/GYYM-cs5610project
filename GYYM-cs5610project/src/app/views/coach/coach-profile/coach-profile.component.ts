import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {ActivatedRoute} from "@angular/router";
import {SharedService} from "../../../services/shared.service.client";
import {CoachService} from "../../../services/coach.service.client";

@Component({
  selector: 'app-coach-profile',
  templateUrl: './coach-profile.component.html',
  styleUrls: ['./coach-profile.component.css']
})
export class CoachProfileComponent implements OnInit {

  coach: any;
  baseUrl = environment.baseUrl;

  constructor(private coachService: CoachService, private activatedRoute: ActivatedRoute, private sharedService: SharedService) { }

  updateCoach() {
    this.sharedService.user = this.coach;
    console.log(this.coach);
    return this.coachService.updateCoach(this.coach).subscribe(
      data => console.log('updated' + data)
    );
  }

  ngOnInit() {
    this.coach = this.sharedService.user;
    console.log('user from sharedService: ' + this.coach._id);
    this.coachService.findCoachById(this.coach._id).subscribe(
      (coach: any) => {
        this.coach = coach;
        console.log('coach from db: ' + this.coach);
      });
  }

  logout() {
    this.coachService.logout()
      .subscribe();
  }

}
