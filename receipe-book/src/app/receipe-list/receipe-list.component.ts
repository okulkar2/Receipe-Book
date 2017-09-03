import { Component } from '@angular/core'

import { Receipe } from './receipe.model'

@Component({
    selector: 'app-receipe-list',
    templateUrl: './receipe-list.component.html'
})

export class ReceipeListComponent{
    receipes: Receipe[]  = [
        new Receipe('Butter Chicken', 'Butter Chicken, synonymous with modern North Indian cuisine', 
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Butter_Chicken_0000x0000_0.jpg/1200px-Butter_Chicken_0000x0000_0.jpg'),
        new Receipe('Paneer Tikka Masala','Paneer tikka masala is an Indian dish of marinated paneer cheese served in a spiced gravy',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Paneer_Tikka_masala.JPG/1280px-Paneer_Tikka_masala.JPG')   
    ];

    selectedReceipe: Receipe;
    constructor(){
    }

    onReceipeSelected(data: Receipe){
        this.selectedReceipe = data;
    }
}

