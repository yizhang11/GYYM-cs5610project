import { Component, OnInit } from '@angular/core';
import {CoachService} from "../../../services/coach.service.client";
import {Router} from "@angular/router";

@Component({
  selector: 'app-coach-manage',
  templateUrl: './coach-manage.component.html',
  styleUrls: ['./coach-manage.component.css']
})
export class CoachManageComponent implements OnInit {

  coaches: any;

  constructor(private coachService: CoachService, private router: Router) { }

  ngOnInit() {
    this.coachService.findAllCoach().subscribe((data:any) => {
      this.coaches = data;
      console.log(data);
    })
  }

  createCoach() {
    let coach = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      expertise: '',
      brief: '',
      photo_url: '',
    }
    console.log('new coach: ' + coach);
    this.coachService.createCoach(coach).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['/admin/coach/' + data._id]);
    });
  }

}
