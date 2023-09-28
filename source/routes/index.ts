import express from 'express';
import { productRoutes } from './product.routes';
import { userRoutes } from './user.routes';

const API_Routes = express.Router(); 

API_Routes.use('/user',userRoutes);
API_Routes.use('/product',productRoutes);

export default API_Routes;