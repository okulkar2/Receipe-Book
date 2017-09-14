import { Component, OnInit } from '@angular/core'

import { Receipe } from './receipe.model'
import { ReceipeService } from './receipe.service'

@Component({
    selector: 'app-receipe-list',
    templateUrl: './receipe-list.component.html',
    providers: [ReceipeService]
})

<<<<<<< HEAD
export class ReceipeListComponent{
    receipes: Receipe[]  = [
        new Receipe('Butter Chicken', 'Butter Chicken, synonymous with modern North Indian cuisine', 
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Butter_Chicken_0000x0000_0.jpg/1200px-Butter_Chicken_0000x0000_0.jpg'),
        new Receipe('Paneer Tikka Masala','Paneer tikka masala is an Indian dish of marinated paneer cheese served in a spiced gravy',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Paneer_Tikka_masala.JPG/1280px-Paneer_Tikka_masala.JPG')   
    ];

    selectedReceipe: Receipe;
    constructor(){
=======
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
>>>>>>> 1e86c75a8b3548191ef26da1d3d1bcb5040f3b94
    }

    onReceipeSelected(data: Receipe){
        this.selectedReceipe = data;
    }
}

