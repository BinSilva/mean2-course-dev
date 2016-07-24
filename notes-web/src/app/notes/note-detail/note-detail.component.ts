import {Component, OnInit, Input, Output} from '@angular/core';
import {Note} from "../../shared/note";
import {EventEmitter} from "@angular/platform-browser-dynamic/src/facade/async";
import {NoteService} from "../note.service";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'app-note-detail',
    templateUrl: 'note-detail.component.html',
    styleUrls: ['note-detail.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [NoteService]
})
export class NoteDetailComponent implements OnInit {

    @Input() note:Note;
    @Output() remove:EventEmitter<any> = new EventEmitter();
    
    constructor(private noteService:NoteService) {
    }

    ngOnInit() {
    }

    excluir():void {
        this.noteService.remove(this.note._id).subscribe(
            () => {
                this.remove.emit(this.note);
                console.log('excluido');
            },
            (err) => console.log(err)
        );
    }
}
