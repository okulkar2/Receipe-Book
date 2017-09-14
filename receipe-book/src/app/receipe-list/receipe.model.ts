import { Ingredient } from '../shared/ingredients.model';

export class Receipe{
    private name: string;
    private description: string;
    private imagePath: string;
    private receipeIngredients: Ingredient[];

    constructor(nameIn:string, descIn:string, imageIn:string, ingredientIn: Ingredient[]){
        this.name  = nameIn;
        this.description = descIn;
        this.imagePath = imageIn;
        this.receipeIngredients = ingredientIn;
    }

    public getName(){
        return this.name;
    }

    public getDescription(){
        return this.description;
    }

    public getImage(){
        return this.imagePath;
    }

    public getIngredients(){
        return this.receipeIngredients;
    }

}