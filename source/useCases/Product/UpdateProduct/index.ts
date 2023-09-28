import { ProductRepository } from "../../../repository/implementation/In-Memory/ProductRepository";
import { UpdateProductCase } from "./UpdateProductCase";
import { UpdateProductController } from "./UpdateProductController";

const productRepository = ProductRepository.getInstance();
const updateProductCase = new UpdateProductCase(productRepository);
const updateProductController = new UpdateProductController(updateProductCase);

export {
    updateProductController
}