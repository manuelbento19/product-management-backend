import { IProductRepository } from "../../../repository/IProductRepository";

export class ListProductsCase{
    constructor(private productRepository: IProductRepository){

    }

    async execute(){
        const products = await this.productRepository.show();
        return products;
    }
}