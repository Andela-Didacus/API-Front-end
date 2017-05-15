import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { dataService } from '../services/data.service';
import { AlertService } from '../services/alert.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'item-app',
    templateUrl: './item.component.html',
    styleUrls: ['./scripts/styles/css/bootstrap.min.css','./scripts/styles/font-awesome/css/font-awesome.min.css','./item.component.css']

})
export class ItemComponent{
    model: any = {};
    items: any  = [];
    private url:string ;
    loading = false;
    itemname:string ;
    done:string;
    bucketid: any;
    updatedname: any;
    itemid: any;
    private sub: any;
    private id:any;


    constructor( private _dataservice: dataService,
                 private alertservice: AlertService,
                 private router: Router,
                 private route: ActivatedRoute
                 ){}
    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; 
    });
        this.getallItems(this.id);
    
    }

    getallItems(id:any){
        this.url = '/bucketlists/' + id + '/items/';
        this._dataservice.get(this.url)
            .subscribe(items => { this.items = items.items;
            console.log(items) });
            
            
    }

    updateItem(item:any){
        this.model = {
            "name":this.updatedname,
            "done":item.done
        }
        this.url = '/bucketlists/' + this.id + '/items/' + item.id + '/';
        this.loading = true;
        this._dataservice.put(this.url, this.model)
            .subscribe(
                data => {
                    this.alertservice.success('Items Updated successfully', true);
                    this.getallItems(this.id);
                    this.router.navigate(['/items',this.id]);
                },
                error => {
                    this.alertservice.error(error._body);
                    this.loading = false;
                });
    }

    deleteItem(item:any){
        this.url = '/bucketlists/' + this.id + '/items/' + item.id + '/';
        this._dataservice.delete(this.url)
            .subscribe(
                    data => {
                        this.alertservice.success('Item successfully Deleted', true);
                        this.getallItems(this.id);
                        this.router.navigate(['/items', this.id]);
                    },
                    error => {
                        this.alertservice.error(error._body);
                        this.loading = false;
                    });

    }

    undoItem(item:any ){
         this.model = {
            "name":item.name,
            "done":"False"
        }
        this.url = '/bucketlists/' + this.id + '/items/' + item.id + '/';
        this.loading = true;
        this._dataservice.put(this.url, this.model)
            .subscribe(
                data => {
                    this.alertservice.success('Items Updated successfully', true);
                    this.getallItems(this.id);
                    this.router.navigate(['/items', this.id]);
                },
                error => {
                    this.alertservice.error(error._body);
                    this.loading = false;
                });
    }

    Done(item:any ){
         this.model = {
            "name":item.name,
            "done":"True"
        }
        this.url = '/bucketlists/' + this.id + '/items/' + item.id + '/';
        this.loading = true;
        this._dataservice.put(this.url, this.model)
            .subscribe(
                data => {
                    this.alertservice.success('Items Updated successfully', true);
                    this.getallItems(this.id);
                    this.router.navigate(['/items', this.id]);
                },
                error => {
                    this.alertservice.error(error._body);
                    this.loading = false;
                });
    }

    addItem(){
        this.model = {
            "name":this.itemname,
            "done":"False"
        }
        console.log(this.model) 
        this.loading = true;
        this.url = '/bucketlists/' + this.id + '/items/';
        this._dataservice.post(this.url,this.model)
            .subscribe(
                data => {
                    this.alertservice.success('Item Successfully created', true);
                    this.getallItems(this.id);
                    this.router.navigate(['/items', this.id]);
                },
                error => {
                    this.alertservice.error(error._body);
                    this.loading = false;
                });
    }
}





