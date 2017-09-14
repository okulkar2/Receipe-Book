import { Component, OnInit} from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingService } from './shopping.service'

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html'
})

export class ShoppingListComponent implements OnInit{

    ingredients: Ingredient[];
    
    constructor(private shoppingService: ShoppingService){}

    ngOnInit(){
        this.ingredients = this.shoppingService.getIngredients();
        this.shoppingService.ingredientChanged.subscribe(
            (newIngredient: Ingredient[]) => {
                this.ingredients = newIngredient;
            }
        )
<<<<<<< HEAD
    }

    onIngredientAdded(newData: Ingredient){
        this.ingredients.push(newData);
=======
>>>>>>> 1e86c75a8b3548191ef26da1d3d1bcb5040f3b94
    }
}