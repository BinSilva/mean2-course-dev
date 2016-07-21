import {RouterConfig, provideRouter} from "@angular/router";
import {SignupComponent} from "../signup/signup.component";

export const routes:RouterConfig = [
    { path: '', redirectTo: '/signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];