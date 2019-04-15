import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class WeatherService{
  private apiUrl = "https://api.darksky.net/forecast/[key]/47.631,-122.347,";

  map = new Map([
    ["clear-day", "01d"],
    ["clear-night", "01n"],
    ["partly-cloudy-day", "02d"],
    ["partly-cloudy-night", "02n"],
    ["cloudy", "03d"],
    ["rain", "09d"],
    ["sleet", "13d"],
    ["snow", "13d"],
    ["wind", "50d"],
  ]);

  constructor(private http: HttpClient) {}

  getWeather(time: String) {
    return this.http.get(this.apiUrl + time).subscribe((weather: any)=> {
      const icon = weather.daily.data.icon;
      const iconNum = this.map.get(icon);
      return "http://openweathermap.org/img/w/" + iconNum + ".png";
    })
  }
}
