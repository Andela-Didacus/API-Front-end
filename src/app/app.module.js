"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms"); // <-- NgModel lives here
var http_1 = require("@angular/http");
var app_config_1 = require("./app.config");
var app_routing_1 = require("./app.routing");
var alert_component_1 = require("./directives/alert.component");
var auth_guard_1 = require("./guards/auth.guard");
var alert_service_1 = require("./services/alert.service");
var authentication_service_1 = require("./services/authentication.service");
var user_service_1 = require("./services/user.service");
var data_service_1 = require("./services/data.service");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var bucket_component_1 = require("./bucketlists/bucket.component");
var bucketlist_component_1 = require("./bucket/bucketlist.component");
var addbucket_component_1 = require("./bucketlists/addbucket.component");
var item_component_1 = require("./items/item.component");
var users_component_1 = require("./users/users.component");
var nav_component_1 = require("./nav.component");
var addItem_component_1 = require("./items/addItem.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            app_routing_1.routing // <-- import the FormsModule before binding with [(ngModel)],
        ],
        declarations: [
            app_component_1.AppComponent,
            alert_component_1.AlertComponent,
            home_component_1.HomeComponent,
            login_component_1.LoginComponent,
            register_component_1.RegisterComponent,
            bucket_component_1.BucketComponent,
            bucketlist_component_1.BucketlistComponent,
            item_component_1.ItemComponent,
            users_component_1.UserComponent,
            addbucket_component_1.AddBucketComponent,
            nav_component_1.NavComponent,
            addItem_component_1.AddItemComponent
        ],
        providers: [
            app_config_1.AppConfig,
            auth_guard_1.AuthGuard,
            alert_service_1.AlertService,
            authentication_service_1.AuthenticationService,
            user_service_1.UserService, data_service_1.dataService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map