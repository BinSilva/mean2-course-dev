import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/auth.service";
import {User} from "../shared/user";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent implements OnInit {

  public user:User = new User(null, null);

  constructor(private authService:AuthService, private router:Router) {}

  onSubmit():void {
    this.authService.signIn(this.user).subscribe(
      () => {
        this.router.navigate(['/notes']);
      },
      (err) => console.log(err)
    );
  }

  ngOnInit() {
  }

}
