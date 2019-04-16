import {Component, OnInit, ViewChild} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {CoachService} from "../../../services/coach.service.client";
import {ActivatedRoute} from "@angular/router";
import {SharedService} from "../../../services/shared.service.client";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-coach-new',
  templateUrl: './coach-new.component.html',
  styleUrls: ['./coach-new.component.css']
})
export class CoachNewComponent implements OnInit {

  @ViewChild('f') myCoachForm: NgForm;
  coach: any;
  coachId: String;

  constructor(private coachService: CoachService, private activatedRoute: ActivatedRoute, private sharedService: SharedService) { }

  updateCoach() {
    console.log(this.coach);
    return this.coachService.updateCoach(this.coach).subscribe(
      data => console.log('updated' + data)
    );
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params:any) => {
      this.coachId = params['coid'];
      this.coachService.findCoachById(this.coachId).subscribe(
        (coach: any) => {
          this.coach = coach;
          console.log('coach from db: ' + this.coach);
        });
    })

  }

  deleteCoach() {
    this.coachService.deleteCoachById(this.coachId).subscribe();
  }

}
