import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {User} from "./user";

@Injectable()
export class AuthService {

    signIn(user:User):Observable<any> {
        return Observable.create((observer) => {
          firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(function (currentUser) {
              currentUser.getToken().then(function (token) {
                localStorage.setItem('X-Auth-Token', token);

                observer.next(currentUser);
              }, 
              function (err) {
                observer.error(err);
              });
            });
        });
    }

    signUp(user:User):Observable<any> {
        return Observable.create((observer) => {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
              .then(function (currentUser) {
                currentUser.getToken().then(function (token) {
                  localStorage.setItem('X-Auth-Token', token);

                  observer.next(currentUser);
                });
              },
              function (err) {
                observer.error(err);
              });
        });
    }

    signOut():Observable<any> {
        return Observable.create((observer) => {
          firebase.auth().signOut()
            .then(function () {
              localStorage.clear();
              
              observer.next();
            }, function (err) {
              observer.error(err);
            });
        });
    }

    static isAuthenticated():boolean {
      if (firebase.auth().currentUser) {
        return true;
      } else {
        return false;
      }
    }
}
