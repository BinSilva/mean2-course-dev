import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {User} from "./user";

@Injectable()
export class AuthService {
    
    signIn():Observable<any> {
        return Observable.create((observer) => {

        });
    }

    signUp(user:User):Observable<any> {
        return Observable.create((observer) => {
            firebase.auth()
                .createUserWithEmailAndPassword(user.email, user.password)
                .then(function (currentUser) {
                    currentUser.getToken().then(function (token) {
                        localStorage.setItem('token', token);
                        observer.next(currentUser);
                    });
                })
                .catch(function(error) {
                    observer.error(error);
                });
        });
    }

    signOut():Observable<any> {
        return Observable.create((observer) => {

        });
    }

    static isAuthenticated() {
    }
    
}