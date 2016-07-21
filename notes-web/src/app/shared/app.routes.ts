
import {RouterConfig, provideRouter} from '@angular/router';
import { SignupComponent } from '../signup/signup.component'
import {LoginComponent} from "../login/login.component";
import {NotesComponent} from "../notes/notes.component";

export const routes:RouterConfig = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'notes', component: NotesComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
