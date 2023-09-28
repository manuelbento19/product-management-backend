import { ProductRepository } from "../../../repository/implementation/In-Memory/ProductRepository";
import { DeleteProductCase } from "./DeleteProductCase";
import { DeleteProductController } from "./DeleteProductController";

const productRepository = ProductRepository.getInstance();
const deleteProductCase = new DeleteProductCase(productRepository);
const deleteProductController = new DeleteProductController(deleteProductCase);

export {
    deleteProductController
}