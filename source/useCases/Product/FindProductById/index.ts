import { ProductRepository } from "../../../repository/implementation/In-Memory/ProductRepository";
import { FindProductByIdCase } from "./FindProductByIdCase";
import { FindProductByIdController } from "./FindProductByIdController";

const productRepository = ProductRepository.getInstance();
const findProductByIdCase = new FindProductByIdCase(productRepository);
const findProductByIdController = new FindProductByIdController(findProductByIdCase);

export {
    findProductByIdController
}