import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { dataService } from '../services/data.service';
import { AlertService } from '../services/alert.service';

@Component({
    moduleId: module.id,
    selector: 'add-app',
    templateUrl: './add.component.html',
    styleUrls:['./scripts/styles/css/bootstrap.min.css','./scripts/styles/font-awesome/css/font-awesome.min.css','./bucket.component.css']
})
export class AddBucketComponent {
    model: any = {};
    loading = false;
    bucketname: string;
    items: any = [];

    constructor(
        private router: Router,
        private dataservice: dataService,
        private alertService: AlertService) { }

    addBucket() {
        this.model = {
            "name":this.bucketname,
            "items":this.items
        }
        console.log(this.model) 
        this.loading = true;
        this.dataservice.post('/api/v1/bucketlists/',this.model)
            .subscribe(
                data => {
                    this.alertService.success('Bucketlist Successfully created', true);
                    this.router.navigate(['/bucketlists']);
                },
                error => {
                    this.alertService.error(error._body);
                    this.loading = false;
                });
    }
}