import { EventEmitter } from '@angular/core'
import { Ingredient } from '../shared/ingredients.model'
    
export class ShoppingService{
    
    ingredientChanged = new EventEmitter<Ingredient[]>(); 

    private ingredients: Ingredient[] = [
        new Ingredient('Chicken', 1),
        new Ingredient('Cloves Garlic', 4),
        new Ingredient('Red Chiles', 2)
    ]    

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}