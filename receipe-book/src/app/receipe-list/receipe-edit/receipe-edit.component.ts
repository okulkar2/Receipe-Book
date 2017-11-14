import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-receipe-edit',
    templateUrl: './receipe-edit.component.html'
})

export class ReceipeEditComponent implements OnInit {
    id: number;
    editMode = false;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.id = +params['id'];
                    console.log(params['id']);
                    this.editMode = params['id'] != null;
                    console.log(this.editMode);
                }
            )
    }

}
