import { Request, Response } from "express";
import { CreateUserCase } from "./CreateUserCase";
import { ErrorHandler } from "../../../utils/ErrorHandler";

export class CreateUserController{
    constructor(private createUserCase: CreateUserCase){}

    async handle(request: Request, response: Response){
        const {name,email,password} = request.body;
        try {
            const data = await this.createUserCase.execute({
                name,
                email,
                password
            });
            return response.status(201).send(data);
        }
        catch (error) {
            if(error instanceof ErrorHandler)
            return response.status(400).json({
                message: error.message
            })
            return response.status(400).send({
                message: "Error while trying create user"
            })
        
        }
    }
}