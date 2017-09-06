import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html'
})

export class ShoppingEditComponent{
    @ViewChild('nameInput') nameIn: ElementRef;
    @ViewChild('amountInput') amountIn: ElementRef;

    @Output() newIngredient = new EventEmitter<Ingredient>();

    onAdd(){

        const name = this.nameIn.nativeElement.value;
        const amount = this.amountIn.nativeElement.value
        const ingredient = new Ingredient(name,amount);
        this.newIngredient.emit(ingredient);        
    }
}