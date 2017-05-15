import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

import { AppConfig } from './app.config';
import { routing } from './app.routing';
import { AlertComponent } from './directives/alert.component';
import { AuthGuard } from './guards/auth.guard';
import { AlertService } from './services/alert.service';
import {  AuthenticationService } from './services/authentication.service';
import {  UserService  } from './services/user.service';
import { dataService } from './services/data.service';



import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BucketComponent } from './bucketlists/bucket.component';
import { BucketlistComponent } from './bucket/bucketlist.component';
import { AddBucketComponent } from './bucketlists/addbucket.component';
import { ItemComponent } from './items/item.component';
import { UserComponent } from './users/users.component';
import { NavComponent } from './nav.component';
import { AddItemComponent } from './items/addItem.component';



@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing  // <-- import the FormsModule before binding with [(ngModel)],
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    BucketComponent,
    BucketlistComponent,
    ItemComponent,
    UserComponent,
    AddBucketComponent,
    NavComponent,
    AddItemComponent
    
  ],

  providers: [
        AppConfig,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService, dataService],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
