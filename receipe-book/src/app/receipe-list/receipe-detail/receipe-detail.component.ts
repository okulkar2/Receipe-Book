import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Receipe } from '../receipe.model';
import { ShoppingService } from '../../shopping-list/shopping.service';
import { ReceipeService } from '../receipe.service';

@Component({
    selector: 'app-receipe-detail',
    templateUrl: './receipe-detail.component.html'
})

export class ReceipeDetailComponent implements OnInit {
    receipeElement: Receipe

    constructor(private shopping: ShoppingService, private route: ActivatedRoute, private receipeService: ReceipeService,
                private router: Router) {}

    ngOnInit() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.receipeElement = this.receipeService.getSingleReceipe(+params['id']);
                }
            )
    }

    pushIngredients() {
        this.shopping.addIngredientList(this.receipeElement.getIngredients());
        console.log('Passed to Receipe Service');
    }

    editReceipeSelected() {
        this.router.navigate(['edit'], { relativeTo: this.route });
    }
}
