import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BucketComponent } from './bucketlists/bucket.component';
import { BucketlistComponent } from './bucket/bucketlist.component';
import { ItemComponent } from './items/item.component';
import { UserComponent } from './users/users.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)],
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    BucketComponent,
    BucketlistComponent,
    ItemComponent,
    UserComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
