import { Component, OnInit } from '@angular/core';
import {ClassService} from "../../../services/class.service.client";
import {CoachService} from "../../../services/coach.service.client";
import {WeatherService} from "../../../services/weather.service.client";
import {SharedService} from "../../../services/shared.service.client";

@Component({
  selector: 'app-coach-class',
  templateUrl: './coach-class.component.html',
  styleUrls: ['./coach-class.component.css']
})
export class CoachClassComponent implements OnInit {

  classes: any;
  coach: any;

  constructor(private classService: ClassService, private coachService: CoachService,
              private sharedService: SharedService, private weatherService: WeatherService) { }

  ngOnInit() {
    this.coach = this.sharedService.user;
    this.classService.findClassByCoach(this.coach._id).subscribe((data: any) => {
      this.classes = data;
      console.log(this.classes);
      this.classes.forEach(c => {
        console.log('try to get weather for: ' + c.name);
        this.weatherService.getWeather(c.time).subscribe((data: any) => {
          console.log('weather icon: ' + data);
          c.weather = data;
        });
      })
    });
  }

}
