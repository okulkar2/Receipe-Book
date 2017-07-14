
export class Receipe{
    name: string;
    description: string;
    imagePath: string;

    constructor(nameIn:string, descIn:string, imageIn:string){
        this.name  = nameIn;
        this.description = descIn;
        this.imagePath = imageIn;
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
}