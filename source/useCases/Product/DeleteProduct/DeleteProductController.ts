import { Request, Response } from "express";
import { DeleteProductCase } from "./DeleteProductCase";
import { ErrorHandler } from "../../../utils/ErrorHandler";

export class DeleteProductController{
    constructor(private deleteProductCase: DeleteProductCase){}

    async handle(request: Request, response: Response){
        const {id} = request.params;
        try {
            await this.deleteProductCase.execute(id);
            return response.status(200).send({
                message: "Product deleted."
            });
        }
        catch (error) {
            if(error instanceof ErrorHandler)
            return response.status(400).json({
                message: error.message
            })
            return response.status(400).send({
                message: "Error while trying delete Product"
            })
        
        }
    }
}