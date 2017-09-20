import { Component } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';
import { ShoppingService } from '../shopping.service'

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html'
})

export class ShoppingEditComponent {

    constructor(private shoppingService: ShoppingService) {}

    onAdd(nameIn: HTMLInputElement, amountIn: HTMLInputElement) {

        const ingredient = new Ingredient(nameIn.value, +amountIn.value);
        this.shoppingService.addIngredient(ingredient);
    }
}
