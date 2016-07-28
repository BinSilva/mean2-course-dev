import {Injectable} from '@angular/core';
import {HttpClient} from "../shared/http-client";
import {Observable} from "rxjs/Rx";
import {Note} from "../shared/note";

@Injectable()
export class NoteService {

    constructor(private httpClient:HttpClient) {
    }

    findAll():Observable<any> {
        let url = 'http://localhost:3000/api/notes/';

        return this.httpClient.get(url);
    }

    findById(id):Observable<any> {
        let url = 'http://localhost:3000/api/notes/' + id;

        return this.httpClient.get(url);
    }

    create(note:Note):Observable<any> {
        let url = 'http://localhost:3000/api/notes/';

        return this.httpClient.post(url, note);
    }

    update(note:Note):Observable<any> {
        let url = 'http://localhost:3000/api/notes/';

        return this.httpClient.put(url, note);
    }

    remove(id:string) {
        let url = 'http://localhost:3000/api/notes/' + id;

        return this.httpClient.delete(url);
    }
}
