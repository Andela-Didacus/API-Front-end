import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { dataService } from '../services/data.service';
import { AlertService } from '../services/alert.service';

@Component({
    selector: 'item-add-app',
    templateUrl: './add.component.html',
    styleUrls:['./scripts/styles/css/bootstrap.min.css','./scripts/styles/font-awesome/css/font-awesome.min.css','./item.component.css']
})
export class AddItemComponent {
    model: any = {};
    loading = false;
    itemname: string;
    done: boolean ;
    bucketid: any;
    private url: string;

    constructor(
        private router: Router,
        private dataservice: dataService,
        private alertService: AlertService) { }

    addItem() {
        this.model = {
            "name":this.itemname,
            "done":this.done
        }
        console.log(this.model) 
        this.loading = true;
        this.url = '/bucketlists/' + this.bucketid + '/items/';
        this.dataservice.post(this.url,this.model)
            .subscribe(
                data => {
                    this.alertService.success('Item Successfully created', true);
                    this.router.navigate(['/items']);
                },
                error => {
                    this.alertService.error(error._body);
                    this.loading = false;
                });
    }
}