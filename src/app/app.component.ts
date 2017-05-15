import { Component } from '@angular/core';
import { UserService } from './services/users.service'

export class Hero {
  id: number;
  name: string;
}

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
}
