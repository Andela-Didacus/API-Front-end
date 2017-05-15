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
var data_service_1 = require("../services/data.service");
var alert_service_1 = require("../services/alert.service");
var AddItemComponent = (function () {
    function AddItemComponent(router, dataservice, alertService) {
        this.router = router;
        this.dataservice = dataservice;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    AddItemComponent.prototype.addItem = function () {
        var _this = this;
        this.model = {
            "name": this.itemname,
            "done": this.done
        };
        console.log(this.model);
        this.loading = true;
        this.url = '/bucketlists/' + this.bucketid + '/items/';
        this.dataservice.post(this.url, this.model)
            .subscribe(function (data) {
            _this.alertService.success('Item Successfully created', true);
            _this.router.navigate(['/items']);
        }, function (error) {
            _this.alertService.error(error._body);
            _this.loading = false;
        });
    };
    return AddItemComponent;
}());
AddItemComponent = __decorate([
    core_1.Component({
        selector: 'item-add-app',
        templateUrl: './add.component.html',
        styleUrls: ['./scripts/styles/css/bootstrap.min.css', './scripts/styles/font-awesome/css/font-awesome.min.css', './item.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        data_service_1.dataService,
        alert_service_1.AlertService])
], AddItemComponent);
exports.AddItemComponent = AddItemComponent;
//# sourceMappingURL=addItem.component.js.map