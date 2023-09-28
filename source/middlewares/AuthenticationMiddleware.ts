import { NextFunction,Response, Request } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';

import { STATUS_CODES } from "http";
import Auth from "../config/Auth";

export class AuthenticationMiddleware{
    async handle(request:Request,response:Response,next:NextFunction){
        const {authorization} = request.headers;
        
        let message = STATUS_CODES[401]

        if(!authorization)
        return response.status(401).send({message});
        try{
            const partsToken = authorization.split(' ');
            if(partsToken.length<1)
            return response.status(401).send({message});
        
            const [SCHEMA,TOKEN] = partsToken;
            if(!/^Bearer/i.test(SCHEMA))
            return response.status(401).send({message});
            const data = jwt.verify(TOKEN,Auth.secret) as JwtPayload;
            request.user = data;
            next();
        }
        catch{
            return response.status(401).send({message});
        }
        
    }
}