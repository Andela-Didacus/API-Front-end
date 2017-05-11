"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this._url = "http://localhost:5000/users/";
    }
    UserService.prototype.createHeader = function () {
        var headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    UserService.prototype.getUsers = function () {
        this._url = "" + this._url;
        var header = this.createHeader();
        var option = new http_1.RequestOptions(header);
        return this._http.get(this._url, option)
            .map(function (response) { return response.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=users.service.js.map