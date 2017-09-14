<<<<<<< HEAD
<<<<<<< HEAD
import { Component, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';
=======
import { Component } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';
import { ShoppingService } from '../shopping.service'
>>>>>>> 1e86c75a8b3548191ef26da1d3d1bcb5040f3b94
=======
import { Component } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';
import { ShoppingService } from '../shopping.service'
>>>>>>> 1e86c75a8b3548191ef26da1d3d1bcb5040f3b94

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html'
})

export class ShoppingEditComponent{
<<<<<<< HEAD
<<<<<<< HEAD
    @Output() newIngredient = new EventEmitter<Ingredient>();

    onAdd(nameIn: HTMLInputElement, amountIn: HTMLInputElement){
        const newIn = new Ingredient(nameIn.value, parseInt(amountIn.value));
        this.newIngredient.emit(newIn);        
=======
=======
>>>>>>> 1e86c75a8b3548191ef26da1d3d1bcb5040f3b94

    constructor(private shoppingService: ShoppingService) {}

    onAdd(nameIn: HTMLInputElement, amountIn: HTMLInputElement){

        const ingredient = new Ingredient(nameIn.value, parseInt(amountIn.value));
        this.shoppingService.addIngredient(ingredient);

<<<<<<< HEAD
>>>>>>> 1e86c75a8b3548191ef26da1d3d1bcb5040f3b94
=======
>>>>>>> 1e86c75a8b3548191ef26da1d3d1bcb5040f3b94
    }
}