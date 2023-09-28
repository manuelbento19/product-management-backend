import { Request, Response } from "express";
import { FindProductByIdCase } from "./FindProductByIdCase";
import { ErrorHandler } from "../../../utils/ErrorHandler";

export class FindProductByIdController{
    constructor(private findProductByIdCase: FindProductByIdCase){}

    async handle(request: Request, response: Response){
        const {id} = request.params;
        try {
            const product = await this.findProductByIdCase.execute(id);
            return response.status(200).send(product);
        }
        catch (error) {
            if(error instanceof ErrorHandler)
            return response.status(400).json({
                message: error.message
            })
            return response.status(400).send({
                message: "Error while trying get product"
            })
        
        }
    }
}