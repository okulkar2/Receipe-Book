<<<<<<< HEAD
<<<<<<< HEAD
import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Receipe } from '../receipe.model'
=======
import { Component, Input } from '@angular/core'
import { Receipe } from '../receipe.model'
import { ReceipeService } from '../receipe.service'
>>>>>>> 1e86c75a8b3548191ef26da1d3d1bcb5040f3b94
=======
import { Component, Input } from '@angular/core'
import { Receipe } from '../receipe.model'
import { ReceipeService } from '../receipe.service'
>>>>>>> 1e86c75a8b3548191ef26da1d3d1bcb5040f3b94

@Component({
    selector: 'app-receipe-item',
    templateUrl: './receipe-item.component.html'
})

export class ReceipeItemComponent{
    @Input()element: Receipe;
<<<<<<< HEAD
<<<<<<< HEAD
    @Output()selectedElement = new EventEmitter<void>();

    onSelected(){
        this.selectedElement.emit();
=======
=======
>>>>>>> 1e86c75a8b3548191ef26da1d3d1bcb5040f3b94
    //@Output()selectedElement = new EventEmitter<void>();

    constructor(private receipeService: ReceipeService){}
        
    onSelected(){
        this.receipeService.receipeSelected.emit(this.element);
<<<<<<< HEAD
>>>>>>> 1e86c75a8b3548191ef26da1d3d1bcb5040f3b94
=======
>>>>>>> 1e86c75a8b3548191ef26da1d3d1bcb5040f3b94
    }
}