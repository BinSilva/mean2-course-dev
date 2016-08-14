import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-nova-conta',
  templateUrl: 'nova-conta.component.html',
  styleUrls: ['nova-conta.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class NovaContaComponent implements OnInit {

  email:string;
  senha:string;
  confirmSenha:string;

  constructor() {}

  criarConta():void {
    if (this.senha === this.confirmSenha) {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.senha)
        .then((user) => {
          console.log(user.email);
        }).catch((err) => {
          console.error(err);
        });
    } else {
      console.error('Senhas não conferem.')
    }
  }

  ngOnInit() {
  }

}
