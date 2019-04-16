import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {SharedService} from './shared.service.client';
import {map} from 'rxjs/operators';
import { Router} from '@angular/router';

@Injectable()
export class CoachService {

  constructor(private _http: HttpClient, private sharedService: SharedService, private _router: Router) {}

  baseUrl = environment.baseUrl;
  options = new HttpHeaders().set('Content-Type', 'application/json');

  createCoach(user: any) {
    return this._http.post(this.baseUrl + '/api/coach/', user);
  }

  findCoachById(coachId: String) {
    return this._http.get(this.baseUrl + '/api/coach/' + coachId);
  }

  findCoachByName(cname: String) {
    return this._http.get(this.baseUrl + '/api/coach/find/' + cname);
  }

  updateCoach(coach: any) {
    console.log('coach client update');
    return this._http.put(this.baseUrl + '/api/coach/' + coach._id, coach);
  }

  deleteCoachById(coachId: String) {
    const req_url = this.baseUrl + '/api/coach/' + coachId;
    return this._http.delete(req_url);
  }

  login(username: String, password: String) {
    const body = {
      username : username,
      password : password
    };
    return this._http.post(this.baseUrl + '/api/coach/login', body, {headers: this.options, withCredentials: true});
  }

  logout() {
    return this._http.post(this.baseUrl + '/api/logout', '', {headers: this.options, withCredentials: true});
  }

  loggedIn() {
    return this._http.get(this.baseUrl + '/api/coachloggedIn', {headers: this.options, withCredentials: true})
      .pipe(map(
        (res: any) => {
          // const user = JSON.stringify(res);
          const user = res;
          console.log('coach client loggedIn: ' + user);
          if (user !== '0') {
            this.sharedService.user = user; // setting user so as to share with all components
            return true;
          } else {
            this._router.navigate(['/login']);
            return false;
          }
        }
      ));
  }

  findAllCoach() {
    return this._http.get(this.baseUrl + '/api/coach');
  }
}
