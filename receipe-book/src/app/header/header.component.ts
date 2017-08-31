import { Component, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{

    @Output() receipeClicked = new EventEmitter<{clicked: boolean}>();
    @Output() shoppingClicked = new EventEmitter<{clicked: boolean}>();

    onReceipeClicked(){
        this.receipeClicked.emit({clicked: true});
    }

    onShoppingClicked(){
        this.shoppingClicked.emit({clicked: true});
    }
}