import {Component, OnInit} from '@angular/core';
import {Note} from "../../shared/note";
import {NoteService} from "../note.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'app-note-form',
    templateUrl: 'note-form.component.html',
    styleUrls: ['note-form.component.css'],
    providers: [NoteService]
})
export class NoteFormComponent implements OnInit {

    public note:Note = new Note(null, null, null);

    constructor(private noteService:NoteService,
                private activatedRoute:ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(
            (params) => {
                let id = params['id'];

                if (id) {
                    this.noteService.findById(id).subscribe(
                        (note) => this.note = note,
                        (err) => console.log(err)
                    );
                }
            }
        );
    }

    onSubmit():void {
        if (this.note._id) {
            this.noteService.update(this.note).subscribe(
                () => console.log('Atualizado com sucesso'),
                (err) => console.log(err)
            );
        } else {
            this.noteService.create(this.note).subscribe(
                (note) => {
                    console.log(note);
                    console.log('Note criado com sucesso');
                },
                (err) => console.log(err)
            );
        }
    }

}
