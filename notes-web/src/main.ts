import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { appRouterProviders } from './app/shared/app.routes';

import { AuthService } from './app/shared/auth.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
    AuthService,
    appRouterProviders
]);

