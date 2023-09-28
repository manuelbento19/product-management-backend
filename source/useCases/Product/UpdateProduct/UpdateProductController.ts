import { Request, Response } from "express";
import { UpdateProductCase } from "./UpdateProductCase";
import { ErrorHandler } from "../../../utils/ErrorHandler";

export class UpdateProductController{
    constructor(private updateProductCase: UpdateProductCase){}

    async handle(request: Request, response: Response){
        const {id} = request.params;
        const {name,price,description} = request.body;
        try {
            const data = await this.updateProductCase.execute(id,{
                name,
                price,
                description
            });

            return response.status(200).send(data);
        }
        catch (error) {

            if(error instanceof ErrorHandler)
            return response.status(400).json({
                message: error.message
            });

            return response.status(400).send({
                message: "Error while trying update Product"
            })
        
        }
    }
}