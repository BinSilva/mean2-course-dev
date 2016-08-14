import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent implements OnInit {

  email:string;
  senha:string;

  constructor() {}

  login():void {
    firebase.auth().signInWithEmailAndPassword(this.email, this.senha)
      .then((user) => {
        console.log(user.email);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  ngOnInit() {
  }

}
