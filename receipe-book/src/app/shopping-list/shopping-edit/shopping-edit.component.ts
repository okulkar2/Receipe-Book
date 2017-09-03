import { Component, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html'
})

export class ShoppingEditComponent{
    @Output() newIngredient = new EventEmitter<Ingredient>();

    onAdd(nameIn: HTMLInputElement, amountIn: HTMLInputElement){
        this.newIngredient.emit(new Ingredient(nameIn.value,parseInt(amountIn.value)));        
    }
}