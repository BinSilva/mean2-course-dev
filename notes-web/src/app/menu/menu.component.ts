import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class MenuComponent implements OnInit {

  constructor() {}

  logout():void {
    firebase.auth().signOut().then(
      () => console.log('logged out!')
    );
  }

  isLogado():boolean {
    if (firebase.auth().currentUser) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
  }

}
