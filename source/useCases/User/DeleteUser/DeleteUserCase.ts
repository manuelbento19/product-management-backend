import { IUserRepository } from "../../../repository/IUserRepository";
import { ErrorHandler } from "../../../utils/ErrorHandler";

export class DeleteUserCase{
    constructor(private userRepository: IUserRepository){

    }

    async execute(id: string){
        const userExists = await this.userRepository.findById(id);
        if(!userExists)
        throw new ErrorHandler("User doesn't exists.");
        
        await this.userRepository.delete(id);
    }
}