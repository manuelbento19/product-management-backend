import { IUserRepository } from "../../../repository/IUserRepository";
import { ErrorHandler } from "../../../utils/ErrorHandler";
import { AuthenticateUserDTO } from "./AuthenticateUserDTO";
import { HashPassword } from "../../../utils/HashPassword";
import {sign} from 'jsonwebtoken'
import Auth from "../../../config/Auth";
import { UserMapper } from "../../../mapper/UserMapper";

export class AuthenticateUserCase{
    constructor(private userRepository: IUserRepository){}

    async execute(data: AuthenticateUserDTO){
        if(!data.email)
        throw new ErrorHandler("Email can't be empty");
        
        const userExists = await this.userRepository.findByEmail(data.email);
        if(!userExists)
        throw new ErrorHandler("Email or password incorrect");

        const hashPassword = new HashPassword();
        const passwordMatch = await hashPassword.IsMatch(data.password,userExists.password);
        if(!passwordMatch)
        throw new ErrorHandler("Email or password incorrect");
        
        const token = sign({id: userExists.id},Auth.secret,{
            expiresIn: '1h'
        })
        return {
            user: UserMapper.toUser(userExists),
            token
        }
    }
}