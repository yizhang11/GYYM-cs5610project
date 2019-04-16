import { Component, OnInit } from '@angular/core';
import {ClassService} from "../../../services/class.service.client";
import {CoachService} from "../../../services/coach.service.client";
import { Router} from '@angular/router';
import {WeatherService} from "../../../services/weather.service.client";

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {

  classes: any;

  constructor(private classService: ClassService, private coachService: CoachService,
              private router: Router, private weatherService: WeatherService) { }

  ngOnInit() {
    this.classService.findAllClass().subscribe((data: any) => {
      this.classes = data;
      console.log(this.classes);
      this.classes.forEach(c => {
        console.log('try to get weather for: ' + c.name);
        this.weatherService.getWeather(c.time).subscribe((data: any) => {
          console.log('weather icon: ' + data);
          c.weather = data;
        });
      })
    })
  }

  coachInfo(c: any){
    return this.coachService.findCoachById(c._coach).subscribe((coach: any) => {
        return coach.firstName + ' ' + coach.lastName;
    })
  }

  coachLink(c: any){
    this.coachService.findCoachById(c._coach).subscribe((coach: any) => {
      this.router.navigate(['/coach/', coach.username]);
    })
  }

  goBack() {
    window.history.back();
  }

}
