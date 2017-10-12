import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import{LoginService} from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:LoginService,private router:Router) { }
  logOut(){
    this.authService.logout();
    this.router.navigate(['login'])
  }
  ngOnInit() {
  }

}
