/**
 * Created by Lab 19 M 01 on 23/07/2016.
 */

import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/Rx";

@Injectable()
export class HttpClient {

  constructor(private http:Http) {}

  get(url:string):Observable<any> {
    return this.http
      .get(url, { headers: HttpClient.getHeaders() })
      .map(response => response.json())
      .catch(error => Observable.throw(error));
  }

  post(url:string, body:any):Observable<any> {
    return this.http
      .post(url, JSON.stringify(body), { headers: HttpClient.getHeaders() })
      .map(response => response.json())
      .catch(error => Observable.throw(error));
  }

  put(url:string, body:any):Observable<any> {
    return this.http
      .put(url, JSON.stringify(body), { headers: HttpClient.getHeaders() })
      .map(response => response.json())
      .catch(error => Observable.throw(error));
  }

  delete(url:string):Observable<any> {
    return this.http
      .delete(url, { headers: HttpClient.getHeaders() })
      .map(response => response.json())
      .catch(error => Observable.throw(error));
  }

  static getHeaders():Headers {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('X-Auth-Token', localStorage.getItem('X-Auth-Token'));

    return headers;
  }
}
