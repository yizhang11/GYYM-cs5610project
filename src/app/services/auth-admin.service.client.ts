import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {AdminService} from './admin.service.client';
import {Observable} from 'rxjs';

@Injectable()
export class AuthAdmin implements CanActivate {

  constructor(private adminService: AdminService) {}

  canActivate(): Observable<boolean> {
    console.log('auth admin guard checking');
    return this.adminService.loggedIn();
  }
}
