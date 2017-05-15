import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../app.config';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
    constructor(private http: Http, private config: AppConfig) { }

    private _url=this.config.apiUrl

    getAll() {
        return this.http.get(this._url + '/users/', this.header())
            .map((response: Response) => response.json());
    }

    getById(_id: string) {
        return this.http.get(this._url + '/users/' + _id, this.header())
            .map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post(this._url + '/auth/register', user, this.header());
    }

    update(user: User) {
        return this.http.put(this._url + '/users/' + user._id, user, this.header());
    }

    delete(_id: string) {
        return this.http.delete(this._url + '/users/' + _id, this.header());
    }


    private header() {
        // create authorization header with token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers();
            headers.append('Authorization', 'Bearer ' + currentUser.token);
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Content-Type', 'application/json');
            return new RequestOptions({ headers: headers });
        }
    }
}