import { Component, OnInit } from '@angular/core';
const LOGIN_STATUS = "login_status"; // 1 Logged in

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  username: any;

  constructor() { }

  ngOnInit() {
    this.username = JSON.parse(localStorage.getItem(LOGIN_STATUS)).username;
  }

}
