import { Request, Response } from "express";
import { DeleteUserCase } from "./DeleteUserCase";
import { ErrorHandler } from "../../../utils/ErrorHandler";

export class DeleteUserController{
    constructor(private deleteUserCase: DeleteUserCase){}

    async handle(request: Request, response: Response){
        const {id} = request.params;
        try {
            await this.deleteUserCase.execute(id);
            return response.status(200).send({
                message: "User deleted."
            });
        }
        catch (error) {
            if(error instanceof ErrorHandler)
            return response.status(400).json({
                message: error.message
            })
            return response.status(400).send({
                message: "Error while trying delete user"
            })
        
        }
    }
}