import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {NoteService} from "./note.service";

@Component({
    moduleId: module.id,
    selector: 'app-notes',
    templateUrl: 'notes.component.html',
    styleUrls: ['notes.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [NoteService]
})
export class NotesComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
