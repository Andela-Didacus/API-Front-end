import { Component } from '@angular/core';
import { UserService } from './services/users.service'

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template:'<user-app></user-app>',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
}
