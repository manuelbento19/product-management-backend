import { Request, Response } from "express";
import { UpdateUserCase } from "./UpdateUserCase";
import { ErrorHandler } from "../../../utils/ErrorHandler";

export class UpdateUserController{
    constructor(private updateUserCase: UpdateUserCase){}

    async handle(request: Request, response: Response){
        const {id} = request.params;
        const {name,email,password} = request.body;
        try {
            const data = await this.updateUserCase.execute(id,{
                name,
                email,
                password
            });
            return response.status(200).send(data);
        }
        catch (error) {

            if(error instanceof ErrorHandler)
            return response.status(400).json({
                message: error.message
            });

            return response.status(400).send({
                message: "Error while trying update User"
            })
        
        }
    }
}