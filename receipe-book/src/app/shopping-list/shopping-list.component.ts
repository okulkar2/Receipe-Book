import { Component, OnInit} from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingService } from './shopping.service'

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    providers: [ShoppingService]
})

export class ShoppingListComponent implements OnInit{

    ingredients: Ingredient[];
    
    constructor(private shoppingService: ShoppingService){}

    ngOnInit(){
        this.ingredients = this.shoppingService.getIngredients();
    }
}