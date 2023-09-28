import express from 'express';
import { listProductsController } from '../useCases/Product/ListProducts';
import { createProductController } from '../useCases/Product/CreateProduct';
import { findProductByIdController } from '../useCases/Product/FindProductById';
import { deleteProductController } from '../useCases/Product/DeleteProduct';
import { authenticationMiddleware } from '../middlewares';
import { updateProductController } from '../useCases/Product/UpdateProduct';

const productRoutes = express.Router();
productRoutes.use(authenticationMiddleware.handle);

productRoutes.post('/',async(request,response)=>{
    await createProductController.handle(request,response);
});
productRoutes.get('/',async(request,response)=>{
    await listProductsController.handle(request,response)
});

productRoutes.get('/:id',async(request,response)=>{
    await findProductByIdController.handle(request,response);
});
productRoutes.put('/:id',async(request,response)=>{
    await updateProductController.handle(request,response);
});
productRoutes.delete('/:id',async(request,response)=>{
    await deleteProductController.handle(request,response);
});

export {
    productRoutes
}