import { NextFunction,Response, Request } from "express";
import { STATUS_CODES } from "http";

export class ErrorMiddleware{
    async handle(request:Request,response:Response,next:NextFunction){
        const error = new Error(STATUS_CODES[404]);
        next(error)
    }
}