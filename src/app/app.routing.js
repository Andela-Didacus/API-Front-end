"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var auth_guard_1 = require("./guards/auth.guard");
var bucket_component_1 = require("./bucketlists/bucket.component");
var bucketlist_component_1 = require("./bucket/bucketlist.component");
var addbucket_component_1 = require("./bucketlists/addbucket.component");
var item_component_1 = require("./items/item.component");
var addItem_component_1 = require("./items/addItem.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'bucketlists', component: bucket_component_1.BucketComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'items/:id', component: item_component_1.ItemComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'bucket', component: bucketlist_component_1.BucketlistComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'addbucket', component: addbucket_component_1.AddBucketComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'additem', component: addItem_component_1.AddItemComponent, canActivate: [auth_guard_1.AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map