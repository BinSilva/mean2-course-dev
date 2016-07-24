import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private router:Router) {}

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|boolean {
        if (AuthService.isAuthenticated()) {
            return true;
        } else {
            return Observable.create(observer => {
                this.router.navigate(['/login']);

                observer.next(false);
            });
        }
    }

}