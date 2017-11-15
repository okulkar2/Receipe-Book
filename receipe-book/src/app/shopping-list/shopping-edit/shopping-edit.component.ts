import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../shared/ingredients.model';
import { ShoppingService } from '../shopping.service'

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html'
})

export class ShoppingEditComponent {

    constructor(private shoppingService: ShoppingService) {}

    newItemAdded(form: NgForm) {
        const value = form.value;
        const ingredient = new Ingredient(value.name, +value.amount);
        this.shoppingService.addIngredient(ingredient);
    }
}
