import { Request, Response } from "express";
import { ListProductsCase } from "./ListProductsCase";
import { ErrorHandler } from "../../../utils/ErrorHandler";

export class ListProductsController{
    constructor(private listProductsCase: ListProductsCase){}

    async handle(request: Request, response: Response){
        try {
            const products = await this.listProductsCase.execute();
            return response.status(200).json(products);
        }
        catch (error) {

            if(error instanceof ErrorHandler)
            return response.status(400).json({
                message: error.message
            });

            return response.status(400).send({
                message: "Error while trying list Products"
            })
        
        }
    }
}