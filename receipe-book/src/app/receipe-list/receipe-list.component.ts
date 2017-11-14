import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { Receipe } from './receipe.model';
import { ReceipeService } from './receipe.service';

@Component({
    selector: 'app-receipe-list',
    templateUrl: './receipe-list.component.html',
    providers: [ReceipeService]
})

export class ReceipeListComponent implements OnInit {

    receipes: Receipe[];

    constructor(private receipeService: ReceipeService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.receipes = this.receipeService.getReceipes();
    }

    newReceipeSelected() {
        this.router.navigate(['new'], {relativeTo: this.route});
    }
}

