import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {CoachService} from './coach.service.client';
import {Observable} from 'rxjs';

@Injectable()
export class AuthCoach implements CanActivate {

  constructor(private coachService: CoachService) {}

  canActivate(): Observable<boolean> {
    console.log('auth guard checking');
    return this.coachService.loggedIn();
  }
}
