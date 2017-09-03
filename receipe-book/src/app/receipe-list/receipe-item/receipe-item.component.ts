import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Receipe } from '../receipe.model'

@Component({
    selector: 'app-receipe-item',
    templateUrl: './receipe-item.component.html'
})

export class ReceipeItemComponent{
    @Input()element: Receipe;
    @Output()selectedElement = new EventEmitter<void>();

    onSelected(){
        this.selectedElement.emit();
    }
}