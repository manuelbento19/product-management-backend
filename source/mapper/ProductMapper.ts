import { Product } from "../entities/Product";

export abstract class ProductMapper{
    static toProduct(data:Product){
        return {
            id: data.id,
            name: data.name,
            price: data.price,
            description: data.description
        }
    }
}