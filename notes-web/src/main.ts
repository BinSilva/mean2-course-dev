import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/shared/app.routes';
import {disableDeprecatedForms, provideForms} from "@angular/forms";

import { AuthService } from './app/shared/auth.service';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  AuthService,
  APP_ROUTER_PROVIDERS
]);

