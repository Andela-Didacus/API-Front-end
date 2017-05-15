import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';


@Component({
  moduleId: module.id,
  selector: 'my-nav',
  templateUrl:'./nav.component.html',
  styleUrls: ['./scripts/bootstrap/css/bootstrap.min.css','./scripts/bootstrap/font-awesome/css/font-awesome.min.css','./app.component.css'],
})
export class NavComponent {
  constructor(
        private userservice: UserService,
        private router: Router) { }

    viewBucketlists() {
          this.router.navigate(['/bucketlists']);
        }

    home(){
      this.router.navigate(['']);
    }

    logout(){
      this.router.navigate(['/login']);
    }

    deleteUser(id:any){
      this.userservice.delete(id);
    }

}
