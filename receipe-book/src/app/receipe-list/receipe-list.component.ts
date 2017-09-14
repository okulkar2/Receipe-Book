import { Component, OnInit } from '@angular/core'
import { Receipe } from './receipe.model'
import { ReceipeService } from './receipe.service'

@Component({
    selector: 'app-receipe-list',
    templateUrl: './receipe-list.component.html',
    providers: [ReceipeService]
})

export class ReceipeListComponent implements OnInit{
    
    receipes: Receipe[];
    selectedReceipe: Receipe;
    
    constructor(private receipeService: ReceipeService){
        this.receipeService.receipeSelected.subscribe(
            (receipe: Receipe) => {
                this.selectedReceipe = receipe
            }
        )
    }

    ngOnInit(){
        this.receipes = this.receipeService.getReceipes();
    }

    onReceipeSelected(data: Receipe){
        this.selectedReceipe = data;
    }
}

