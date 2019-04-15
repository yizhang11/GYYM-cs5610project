import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class ClassService {

  baseUrl = environment.baseUrl;
  constructor(private _http: HttpClient) {

  }

  findClassById(classId: String) {
    return this._http.get(this.baseUrl + '/api/class/' + classId);
  }

  findClassByCoach(coachId: String) {
    return this._http.get(this.baseUrl + '/api/coach/' + coachId + '/class');
  }

  createClass(coachId, newClass: any) {
    const url = this.baseUrl + '/api/coach/' + coachId + '/class';
    return this._http.post(url, newClass);

  }

  updateClass(classId, newClass: any) {
    const url = this.baseUrl + '/api/class/' + classId;
    const body = newClass;
    return this._http.put(url, body);
  }

  deleteClass(classId) {
    const url = this.baseUrl + '/api/class/' + classId;
    return this._http.delete(url);
  }

  findAllClass() {
    return this._http.get(this.baseUrl + '/api/class');
  }
}
