import { ProductRepository } from "../../../repository/implementation/In-Memory/ProductRepository";
import { ListProductsCase } from "./ListProductsCase";
import { ListProductsController } from "./ListProductsController";

const productRepository = ProductRepository.getInstance();
const listProductsCase = new ListProductsCase(productRepository);
const listProductsController = new ListProductsController(listProductsCase);

export {
    listProductsController
}