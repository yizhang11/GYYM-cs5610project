import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable()
export class WeatherService{
  private apiUrl = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/51c6f2db5bccf1a6480cbcd267e15f4a/47.631,-122.347,";
  baseUrl = environment.baseUrl;
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
    console.log('weather client: ' + time);
    return this.http.get(this.baseUrl+ '/api/weather/'+time);
    //.pipe(map(
    //   (res: any) => {
    //     // const user = JSON.stringify(res);
    //     const data = res;
    //     console.log('weather client: ' + data);
    //   }
    // ));
  }
}
