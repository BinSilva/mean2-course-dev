import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {NoteDetailComponent} from "../note-detail/note-detail.component";
import {Note} from "../../shared/note";
import {NoteService} from "../note.service";

@Component({
    moduleId: module.id,
    selector: 'app-note-list',
    templateUrl: 'note-list.component.html',
    styleUrls: ['note-list.component.css'],
    directives: [ROUTER_DIRECTIVES, NoteDetailComponent],
    providers: [NoteService]
})
export class NoteListComponent implements OnInit {

    public notes:Note[] = [];
    
    constructor(private noteService:NoteService) {
    }

    ngOnInit() {
        this.noteService.findAll().subscribe(
            (notes) => this.notes = notes,
            (err) => console.log(err)
        );
    }

    onRemove(note:Note):void {
        this.notes.splice(this.notes.indexOf(note), 1);
    }
}
