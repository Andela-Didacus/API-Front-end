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
var router_1 = require("@angular/router");
var user_service_1 = require("./services/user.service");
var NavComponent = (function () {
    function NavComponent(userservice, router) {
        this.userservice = userservice;
        this.router = router;
    }
    NavComponent.prototype.viewBucketlists = function () {
        this.router.navigate(['/bucketlists']);
    };
    NavComponent.prototype.home = function () {
        this.router.navigate(['']);
    };
    NavComponent.prototype.logout = function () {
        this.router.navigate(['/login']);
    };
    NavComponent.prototype.deleteUser = function (id) {
        this.userservice.delete(id);
    };
    return NavComponent;
}());
NavComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-nav',
        templateUrl: './nav.component.html',
        styleUrls: ['./scripts/bootstrap/css/bootstrap.min.css', './scripts/bootstrap/font-awesome/css/font-awesome.min.css', './app.component.css'],
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.Router])
], NavComponent);
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map