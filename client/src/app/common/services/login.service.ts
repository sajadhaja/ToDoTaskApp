import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

const LOGIN_STATUS = "login_status"; // 1 Logged in

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  isLoggedIn() {
    let loginObj = localStorage.getItem(LOGIN_STATUS);
    if (loginObj) {
      return JSON.parse(loginObj).username ? true : false
    }
    return false;
  }

  logout() {
    localStorage.removeItem(LOGIN_STATUS);
  }


  setLocalStorage(res: any) {
    localStorage.setItem(LOGIN_STATUS, JSON.stringify(res));
  }

}