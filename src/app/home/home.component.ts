import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
    moduleId: module.id,
    selector: 'home-app',
    templateUrl:'./home.component.html',
    styleUrls:['./scripts/styles/css/bootstrap.min.css','./scripts/styles/font-awesome/css/font-awesome.min.css','./home.component.css']
})
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.currentUser)
    }
    ngOnInit() {
        this.loadAllUsers();
    }
    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users.users;
        console.log(users.users) });
    }
    deleteUser(_id: string) {
        this.userService.delete(_id);
    }

}