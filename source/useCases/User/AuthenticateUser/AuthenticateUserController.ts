import { Request, Response } from "express";
import { AuthenticateUserCase } from "./AuthenticateUserCase";
import { ErrorHandler } from "../../../utils/ErrorHandler";

export class AuthenticateUserController{
    constructor(private authenticateUserCase: AuthenticateUserCase){}

    async handle(request: Request, response: Response){
        const {email,password} = request.body;
        try {
            const data = await this.authenticateUserCase.execute({
                email,
                password
            });
            return response.status(200).send(data);
        }
        catch (error) {
            if(error instanceof ErrorHandler)
            return response.status(400).json({
                message: error.message
            })
            return response.status(400).send({
                message: "Error while trying authenticate user"
            })
        
        }
    }
}