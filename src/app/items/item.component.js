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
var router_2 = require("@angular/router");
var ItemComponent = (function () {
    function ItemComponent(_dataservice, alertservice, router, route) {
        this._dataservice = _dataservice;
        this.alertservice = alertservice;
        this.router = router;
        this.route = route;
        this.model = {};
        this.items = [];
        this.loading = false;
    }
    ItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
        this.getallItems(this.id);
    };
    ItemComponent.prototype.getallItems = function (id) {
        var _this = this;
        this.url = '/bucketlists/' + id + '/items/';
        this._dataservice.get(this.url)
            .subscribe(function (items) {
            _this.items = items.items;
            console.log(items);
        });
    };
    ItemComponent.prototype.updateItem = function (item) {
        var _this = this;
        this.model = {
            "name": this.updatedname,
            "done": item.done
        };
        this.url = '/bucketlists/' + this.id + '/items/' + item.id + '/';
        this.loading = true;
        this._dataservice.put(this.url, this.model)
            .subscribe(function (data) {
            _this.alertservice.success('Items Updated successfully', true);
            _this.getallItems(_this.id);
            _this.router.navigate(['/items', _this.id]);
        }, function (error) {
            _this.alertservice.error(error._body);
            _this.loading = false;
        });
    };
    ItemComponent.prototype.deleteItem = function (item) {
        var _this = this;
        this.url = '/bucketlists/' + this.id + '/items/' + item.id + '/';
        this._dataservice.delete(this.url)
            .subscribe(function (data) {
            _this.alertservice.success('Item successfully Deleted', true);
            _this.getallItems(_this.id);
            _this.router.navigate(['/items', _this.id]);
        }, function (error) {
            _this.alertservice.error(error._body);
            _this.loading = false;
        });
    };
    ItemComponent.prototype.undoItem = function (item) {
        var _this = this;
        this.model = {
            "name": item.name,
            "done": "False"
        };
        this.url = '/bucketlists/' + this.id + '/items/' + item.id + '/';
        this.loading = true;
        this._dataservice.put(this.url, this.model)
            .subscribe(function (data) {
            _this.alertservice.success('Items Updated successfully', true);
            _this.getallItems(_this.id);
            _this.router.navigate(['/items', _this.id]);
        }, function (error) {
            _this.alertservice.error(error._body);
            _this.loading = false;
        });
    };
    ItemComponent.prototype.Done = function (item) {
        var _this = this;
        this.model = {
            "name": item.name,
            "done": "True"
        };
        this.url = '/bucketlists/' + this.id + '/items/' + item.id + '/';
        this.loading = true;
        this._dataservice.put(this.url, this.model)
            .subscribe(function (data) {
            _this.alertservice.success('Items Updated successfully', true);
            _this.getallItems(_this.id);
            _this.router.navigate(['/items', _this.id]);
        }, function (error) {
            _this.alertservice.error(error._body);
            _this.loading = false;
        });
    };
    ItemComponent.prototype.addItem = function () {
        var _this = this;
        this.model = {
            "name": this.itemname,
            "done": "False"
        };
        console.log(this.model);
        this.loading = true;
        this.url = '/bucketlists/' + this.id + '/items/';
        this._dataservice.post(this.url, this.model)
            .subscribe(function (data) {
            _this.alertservice.success('Item Successfully created', true);
            _this.getallItems(_this.id);
            _this.router.navigate(['/items', _this.id]);
        }, function (error) {
            _this.alertservice.error(error._body);
            _this.loading = false;
        });
    };
    return ItemComponent;
}());
ItemComponent = __decorate([
    core_1.Component({
        selector: 'item-app',
        templateUrl: './item.component.html',
        styleUrls: ['./scripts/styles/css/bootstrap.min.css', './scripts/styles/font-awesome/css/font-awesome.min.css', './item.component.css']
    }),
    __metadata("design:paramtypes", [data_service_1.dataService,
        alert_service_1.AlertService,
        router_1.Router,
        router_2.ActivatedRoute])
], ItemComponent);
exports.ItemComponent = ItemComponent;
//# sourceMappingURL=item.component.js.map