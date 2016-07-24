import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {AppComponent, environment} from './app/';
import {APP_ROUTER_PROVIDERS} from './app/shared/app.routes';
import {HTTP_PROVIDERS} from "@angular/http";
import {disableDeprecatedForms, provideForms} from "@angular/forms";

import {AuthService} from './app/shared/auth.service';
import {AuthGuardService} from './app/shared/auth-guard.service';
import {HttpClient} from './app/shared/http-client';

if (environment.production) {
    enableProdMode();
}

bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms(),
    HTTP_PROVIDERS,
    AuthService,
    HttpClient,
    AuthGuardService,
    APP_ROUTER_PROVIDERS
]);

