
export class Ingredient{

    name: string;
    amount: number;

    constructor(nameIn:string, amountIn:number){
        this.name = nameIn;
        this.amount = amountIn;
    }

    public getName(){
        return this.name;
    }

    public getAmount(){
        return this.amount;
    }
}