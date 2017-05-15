import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';
import { AlertService } from '../services/alert.service';

@Component({
    selector: 'register-app',
    templateUrl: './register.component.html',
    styleUrls:['./register.component.css']
})
export class RegisterComponent {
    model: any = {};
    loading = false;
    first_name: string;
    last_name: string;
    gender: string;
    email: string;
    username: string;
    password: string;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
        this.model = {
            "first name":this.first_name,
            "last name":this.last_name,
            "gender":this.gender,
            "email":this.email,
            "username":this.username,
            "password":this.password
        }
        console.log(this.model) 
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error._body);
                    this.loading = false;
                });
    }
}