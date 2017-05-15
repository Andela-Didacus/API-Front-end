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
var app_config_1 = require("../app.config");
var UserService = (function () {
    function UserService(http, config) {
        this.http = http;
        this.config = config;
        this._url = this.config.apiUrl;
    }
    UserService.prototype.getAll = function () {
        return this.http.get(this._url + '/users/', this.header())
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.getById = function (_id) {
        return this.http.get(this._url + '/users/' + _id, this.header())
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.create = function (user) {
        return this.http.post(this._url + '/auth/register', user, this.header());
    };
    UserService.prototype.update = function (user) {
        return this.http.put(this._url + '/users/' + user._id, user, this.header());
    };
    UserService.prototype.delete = function (_id) {
        return this.http.delete(this._url + '/users/' + _id, this.header());
    };
    UserService.prototype.header = function () {
        // create authorization header with token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers();
            headers.append('Authorization', 'Bearer ' + currentUser.token);
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Content-Type', 'application/json');
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map