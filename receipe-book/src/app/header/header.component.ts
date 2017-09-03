import { Component, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{

    @Output() featureClicked = new EventEmitter<string>();

    onSelect(value: string){
        this.featureClicked.emit(value);
    }

}