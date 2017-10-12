import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../common/services/login.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username: String;
    password: String;
    

    constructor(private router: Router,
        private authService: LoginService) {
        this.router = router;
    }

    ngOnInit() {
        this.authService.logout();
    }

    login() {
        let resp = { "username": this.username, "name": this.username};
        this.authService.setLocalStorage(resp);
        this.router.navigate(['tasklist']);
    }
}
