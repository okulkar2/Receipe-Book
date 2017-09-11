import { Receipe } from './receipe.model';
import { EventEmitter} from '@angular/core';

export class ReceipeService{

    private receipes: Receipe[]  = [
        new Receipe('Butter Chicken', 'Butter Chicken, synonymous with modern North Indian cuisine', 
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Butter_Chicken_0000x0000_0.jpg/1200px-Butter_Chicken_0000x0000_0.jpg'),
        new Receipe('Paneer Tikka Masala','Paneer tikka masala is an Indian dish of marinated paneer cheese served in a spiced gravy',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Paneer_Tikka_masala.JPG/1280px-Paneer_Tikka_masala.JPG')   
    ];

    receipeSelected = new EventEmitter<Receipe>();

    getReceipes(){
        return this.receipes.slice();
    }

}