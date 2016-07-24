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

        //return this.httpClient.get(url);

        return Observable.create(
            observer => {
                observer.next([
                    new Note('1', 'Note 1', 'Note 1'),
                    new Note('2', 'Note 2', 'Note 2'),
                    new Note('3', 'Note 3', 'Note 3')
                ])
            }
        );
    }

    findById(id):Observable<any> {
        let url = 'http://localhost:3000/api/notes/';

        // return this.httpClient.get(url);

        return Observable.create(
            observer => {
                observer.next(new Note('1', 'Note 1', 'Note 1'))
            }
        );
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
