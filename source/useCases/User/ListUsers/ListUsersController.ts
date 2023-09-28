import { Request, Response } from "express";
import { ListUsersCase } from "./ListUsersCase";
import { ErrorHandler } from "../../../utils/ErrorHandler";

export class ListUsersController{
    constructor(private listUsersCase: ListUsersCase){}

    async handle(request: Request, response: Response){
        try {
            const users = await this.listUsersCase.execute();
            return response.status(200).send(users);
        }
        catch (error) {
            if(error instanceof ErrorHandler)
            return response.status(400).json({
                message: error.message
            })
            return response.status(400).send({
                message: "Error while trying list users"
            })
        
        }
    }
}