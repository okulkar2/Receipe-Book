import { Component, Input } from '@angular/core'
import { Receipe } from '../receipe.model'
import { ReceipeService } from '../receipe.service'

@Component({
    selector: 'app-receipe-item',
    templateUrl: './receipe-item.component.html'
})

export class ReceipeItemComponent{
    @Input()element: Receipe;
    //@Output()selectedElement = new EventEmitter<void>();

    constructor(private receipeService: ReceipeService){}
        
    onSelected(){
        this.receipeService.receipeSelected.emit(this.element);
    }
}