import { ProductMapper } from "../../../mapper/ProductMapper";
import { IProductRepository } from "../../../repository/IProductRepository";
import { ErrorHandler } from "../../../utils/ErrorHandler";
import { CreateProductDTO } from "./CreateProductDTO";

export class CreateProductCase{
    constructor(private productRepository: IProductRepository){

    }

    async execute(data: CreateProductDTO){
        if(!data.name)
        throw new ErrorHandler("Product name can't be empty.");
        if(!data.price)
        throw new ErrorHandler("Product price can't be empty.");

        const productExists = await this.productRepository.findByName(data.name);
        if(productExists)
        throw new ErrorHandler("Product already exists.");
        
        const newProduct = await this.productRepository.save(data);
        return ProductMapper.toProduct(newProduct);
    }
}