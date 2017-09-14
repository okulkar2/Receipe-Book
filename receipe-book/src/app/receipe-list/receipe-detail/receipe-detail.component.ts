import { Component, Input } from '@angular/core';
import { Receipe } from '../receipe.model';
import { ShoppingService } from '../../shopping-list/shopping.service'

@Component({
    selector: 'app-receipe-detail',
    templateUrl: './receipe-detail.component.html'
})

export class ReceipeDetailComponent{
    @Input() receipeElement: Receipe

    constructor(private shopping: ShoppingService){}
    
    pushIngredients(){
        this.shopping.addIngredientList(this.receipeElement.getIngredients());
        console.log("Passed to Receipe Service");
    }
}