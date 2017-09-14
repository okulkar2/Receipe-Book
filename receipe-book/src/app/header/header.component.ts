import { Component, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{

    @Output() featureClicked = new EventEmitter<string>();

<<<<<<< HEAD
<<<<<<< HEAD
    onSelect(value: string){
        this.featureClicked.emit(value);
    }

=======
    onSelectReceipe(){
        this.featureClicked.emit('receipe');
    }

    onSelectShopping(){
        this.featureClicked.emit('shopping');
    }

>>>>>>> 1e86c75a8b3548191ef26da1d3d1bcb5040f3b94
=======
    onSelectReceipe(){
        this.featureClicked.emit('receipe');
    }

    onSelectShopping(){
        this.featureClicked.emit('shopping');
    }

>>>>>>> 1e86c75a8b3548191ef26da1d3d1bcb5040f3b94
}