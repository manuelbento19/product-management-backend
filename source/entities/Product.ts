export class Product{
    public id?:string;
    public name: string;
    public price: number;
    public description?: string;
    public created_At?: Date;

    constructor(data: Omit<Product, 'id'|'created_At'>){
        Object.assign(this,data);
    }
}