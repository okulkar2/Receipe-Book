import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

export class ShoppingService {

    ingredientChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [];

    getIngredients() {
        return this.ingredients.slice();
    }

    getSingleIngredient(index: number) {
        return this.ingredients[index];
    }
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addIngredientList(ingredientList: Ingredient[]) {
        this.ingredients.push.apply(this.ingredients, ingredientList);
        this.ingredientChanged.emit(this.ingredients.slice());
        console.log('Added to ingredients array');
    }
}
