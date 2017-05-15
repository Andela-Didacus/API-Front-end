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
var alert_service_1 = require("../services/alert.service");
var data_service_1 = require("../services/data.service");
var BucketComponent = (function () {
    function BucketComponent(_dataservice, alertservice, router) {
        this._dataservice = _dataservice;
        this.alertservice = alertservice;
        this.router = router;
        this.bucketlists = [];
        this.model = {};
        this.loading = false;
        this.items = [];
    }
    BucketComponent.prototype.ngOnInit = function () {
        this.getBucketlists();
    };
    BucketComponent.prototype.getBucketlists = function () {
        var _this = this;
        this._dataservice.get('/bucketlists/')
            .subscribe(function (bucketlists) {
            _this.bucketlists = bucketlists.bucketlists;
            console.log(bucketlists);
        });
    };
    BucketComponent.prototype.updateBucketlist = function (bucketlist) {
        var _this = this;
        this.model = {
            "name": this.updatedname
        };
        this.loading = true;
        console.log(this.model);
        this._dataservice.put('/bucketlists/' + bucketlist.id + '/', this.model)
            .subscribe(function (data) {
            _this.alertservice.success('Bucketlist Updated successfully', true);
            _this.getBucketlists();
        }, function (error) {
            _this.alertservice.error(error._body);
            _this.loading = false;
        });
    };
    BucketComponent.prototype.deleteBucketlist = function (bucketlist) {
        var _this = this;
        this._dataservice.delete('/bucketlists/' + bucketlist.id + '/')
            .subscribe(function (data) {
            _this.alertservice.success('Bucketlist successfully Deleted', true);
            _this.getBucketlists();
        }, function (error) {
            _this.alertservice.error(error._body);
            _this.loading = false;
        });
    };
    BucketComponent.prototype.addItem = function (bucketlist) {
        var _this = this;
        this.model = {
            "name": this.itemname,
            "done": "False"
        };
        console.log(this.model);
        this.loading = true;
        this.url = '/bucketlists/' + bucketlist.id + '/items/';
        this._dataservice.post(this.url, this.model)
            .subscribe(function (data) {
            _this.alertservice.success('Item Successfully created', true);
            _this.router.navigate(['/items', bucketlist.id]);
        }, function (error) {
            _this.alertservice.error(error._body);
            _this.loading = false;
        });
    };
    BucketComponent.prototype.addBucketlist = function () {
        var _this = this;
        this.model = {
            "name": this.bucketname,
            "items": this.items
        };
        console.log(this.model);
        this.loading = true;
        this._dataservice.post('/bucketlists/', this.model)
            .subscribe(function (data) {
            _this.alertservice.success('Bucketlist Successfully created', true);
            _this.router.navigate(['/bucketlists']);
        }, function (error) {
            _this.alertservice.error(error._body);
            _this.loading = false;
        });
    };
    return BucketComponent;
}());
BucketComponent = __decorate([
    core_1.Component({
        selector: 'bucket-app',
        templateUrl: './bucket.component.html',
        styleUrls: ['./scripts/styles/css/bootstrap.min.css', './scripts/styles/font-awesome/css/font-awesome.min.css', './bucket.component.css']
    }),
    __metadata("design:paramtypes", [data_service_1.dataService,
        alert_service_1.AlertService,
        router_1.Router])
], BucketComponent);
exports.BucketComponent = BucketComponent;
//# sourceMappingURL=bucket.component.js.map