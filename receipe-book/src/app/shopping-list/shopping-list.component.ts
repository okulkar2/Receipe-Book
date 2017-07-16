import {Component} from '@angular/core';
import {Ingredient} from '../shared/ingredients.model';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html'
})

export class ShoppingListComponent{
    ingredients: Ingredient[] = [
        new Ingredient('Chicken', 1),
        new Ingredient('Cloves Garlic', 4),
        new Ingredient('Red Chiles', 2)
    ]

    constructor(){
    }
}