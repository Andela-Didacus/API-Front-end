import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/users.service'

@Component({
    selector:'user-app',
    templateUrl:'./users.component.html'
})
export class UserComponent implements OnInit{
    users:any  = [];

    constructor( private _usersservice: UserService){}
    ngOnInit(){
        this._usersservice.getUsers()
            .subscribe(resUserData => this.users = resUserData);
            console.log(this.users)
    }


}