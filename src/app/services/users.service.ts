import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    private _url: string ="http://localhost:5000/users/"

    constructor(private _http:Http){}

    createHeader(): Headers{
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/json');
    return headers
}

    getUsers(){
        this._url = `${this._url}`
        let header = this.createHeader();
        let option = new RequestOptions(header);
        return this._http.get(this._url, option)
            .map((response:Response) => response.json());
    }
}