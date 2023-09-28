import express from 'express';
import { listUsersController } from '../useCases/User/ListUsers';
import { createUserController } from '../useCases/User/CreateUser';
import { deleteUserController } from '../useCases/User/DeleteUser/index';
import { authenticateUserController } from '../useCases/User/AuthenticateUser';
import { authenticationMiddleware } from '../middlewares';

const userRoutes = express.Router();

userRoutes.post('/authentication',async(request,response)=>{
    await authenticateUserController.handle(request,response);
});
userRoutes.post('/',async(request,response)=>{
    await createUserController.handle(request,response);
});

userRoutes.use(authenticationMiddleware.handle);
userRoutes.get('/',async(request,response)=>{
    await listUsersController.handle(request,response)
});

userRoutes.delete('/:id',async(request,response)=>{
    await deleteUserController.handle(request,response);
});

export {
    userRoutes
}