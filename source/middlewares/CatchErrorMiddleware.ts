import { NextFunction,Response, Request } from "express";
import { STATUS_CODES } from "http";

export class CatchErrorMiddleware{
    async handle(error: any, request:Request,response:Response,next:NextFunction){
        return response.status(404).send({
            error: error.message
        })
    }
}