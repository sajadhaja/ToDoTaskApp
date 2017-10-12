import { Injectable } from '@angular/core';
import {CanActivate,Router} from '@angular/router';
import {LoginService} from './login.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService:LoginService,private router:Router) { }
  canActivate(){
    if(!this.authService.isLoggedIn()){
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}