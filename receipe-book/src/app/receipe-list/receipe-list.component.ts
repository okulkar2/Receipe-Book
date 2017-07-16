import { Component } from '@angular/core'

import { Receipe } from './receipe.model'

@Component({
    selector: 'app-receipe-list',
    templateUrl: './receipe-list.component.html'
})

export class ReceipeListComponent{
    receipes: Receipe[]  = [
        new Receipe('Butter Chicken', 'Butter Chicken, synonymous with modern North Indian cuisine', 
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Butter_Chicken_0000x0000_0.jpg/1200px-Butter_Chicken_0000x0000_0.jpg')   
    ];

    constructor(){
    }

}

