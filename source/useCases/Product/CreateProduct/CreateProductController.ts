import { Request, Response } from "express";
import { CreateProductCase } from "./CreateProductCase";
import { ErrorHandler } from "../../../utils/ErrorHandler";

export class CreateProductController{
    constructor(private createProductCase: CreateProductCase){}

    async handle(request: Request, response: Response){

        const {name,price,description} = request.body;
        
        try {

            const data = await this.createProductCase.execute({
                name,
                price,
                description
            });

            return response.status(201).send(data);
        }
        catch (error) {

            if(error instanceof ErrorHandler)
            return response.status(400).json({
                message: error.message
            });

            return response.status(400).send({
                message: "Error while trying create Product"
            })
        
        }
    }
}