import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { BucketComponent } from './bucketlists/bucket.component';
import { BucketlistComponent } from './bucket/bucketlist.component';
import { AddBucketComponent } from './bucketlists/addbucket.component';
import { ItemComponent } from './items/item.component';
import { UserComponent } from './users/users.component';
import { AddItemComponent } from './items/addItem.component';



const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'bucketlists', component: BucketComponent, canActivate: [AuthGuard] },
    { path: 'items/:id', component: ItemComponent, canActivate: [AuthGuard] },
    { path: 'bucket', component: BucketlistComponent, canActivate:[AuthGuard]},
    { path: 'addbucket', component: AddBucketComponent, canActivate:[AuthGuard]},
    { path: 'additem', component: AddItemComponent , canActivate:[AuthGuard]},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);