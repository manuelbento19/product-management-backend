import { IProductRepository } from "../../../repository/IProductRepository";
import { ErrorHandler } from "../../../utils/ErrorHandler";

export class DeleteProductCase{
    constructor(private productRepository: IProductRepository){

    }

    async execute(id: string){
        const productExists = await this.productRepository.findById(id);
        if(!productExists)
        throw new ErrorHandler("Product doesn't exists.");
        
        await this.productRepository.delete(id);
    }
}