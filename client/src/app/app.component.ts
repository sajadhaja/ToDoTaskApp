import { Component,OnInit } from '@angular/core';

import {LoginService} from './common/services/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  constructor(private authService:LoginService){}
    ngOnInit(){
  }

  isLoggedIn(){
    //console.log(`Logged In status :  ${this.authService.isLoggedIn()}`)
    return this.authService.isLoggedIn();
  }
}
