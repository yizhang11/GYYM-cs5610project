import { Component, OnInit } from '@angular/core';
import {CoachService} from "../../../services/coach.service.client";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-coach-display',
  templateUrl: './coach-display.component.html',
  styleUrls: ['./coach-display.component.css']
})
export class CoachDisplayComponent implements OnInit {

  coach: any;
  constructor(private coachService: CoachService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        let coachName = params['cname'];
        this.coachService.findCoachByName(coachName).subscribe(
          (coach: any) => {
            this.coach = coach;
            console.log('coach from db: ' + this.coach);
          });
      }
    );
  }

  goBack() {
    window.history.back();
  }

}
