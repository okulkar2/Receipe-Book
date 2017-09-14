import { Component, Input } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
import { Receipe } from '../receipe.model'
=======
import { Receipe } from '../receipe.model';
import { ShoppingService } from '../../shopping-list/shopping.service'
>>>>>>> 1e86c75a8b3548191ef26da1d3d1bcb5040f3b94
=======
import { Receipe } from '../receipe.model';
import { ShoppingService } from '../../shopping-list/shopping.service'
>>>>>>> 1e86c75a8b3548191ef26da1d3d1bcb5040f3b94

@Component({
    selector: 'app-receipe-detail',
    templateUrl: './receipe-detail.component.html'
})

export class ReceipeDetailComponent{
    @Input() receipeElement: Receipe
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 1e86c75a8b3548191ef26da1d3d1bcb5040f3b94

    constructor(private shopping: ShoppingService){}
    
    pushIngredients(){
        this.shopping.addIngredientList(this.receipeElement.getIngredients());
        console.log("Passed to Receipe Service");
    }
<<<<<<< HEAD
>>>>>>> 1e86c75a8b3548191ef26da1d3d1bcb5040f3b94
=======
>>>>>>> 1e86c75a8b3548191ef26da1d3d1bcb5040f3b94
}