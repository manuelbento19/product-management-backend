import { ProductRepository } from "../../../repository/implementation/In-Memory/ProductRepository";
import { CreateProductCase } from "./CreateProductCase";
import { CreateProductController } from "./CreateProductController";

const productRepository = ProductRepository.getInstance();
const createProductCase = new CreateProductCase(productRepository);
const createProductController = new CreateProductController(createProductCase);

export {
    createProductController
}