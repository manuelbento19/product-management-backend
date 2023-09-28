import { ProductMapper } from "../../../mapper/ProductMapper";
import { IProductRepository } from "../../../repository/IProductRepository";
import { ErrorHandler } from "../../../utils/ErrorHandler";
import { UpdateProductDTO } from "./UpdateProductDTO";

export class UpdateProductCase{
    constructor(private productRepository: IProductRepository){

    }

    async execute(id:string, data: UpdateProductDTO){
        if(!data)
        throw new ErrorHandler("Insert what did you would like to update");

        const productExists = await this.productRepository.findById(id);
        if(!productExists)
        throw new ErrorHandler("Product doesn't exists.");
        const result = await this.productRepository.update(id,data);
        return ProductMapper.toProduct(result);
    }
}