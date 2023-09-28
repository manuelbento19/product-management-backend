import { UserMapper } from "../../../mapper/UserMapper";
import { IUserRepository } from "../../../repository/IUserRepository";
import { ErrorHandler } from "../../../utils/ErrorHandler";
import { UpdateUserDTO } from "./UpdateUserDTO";

export class UpdateUserCase{
    constructor(private userRepository: IUserRepository){

    }

    async execute(id:string, data: UpdateUserDTO){
        if(!data)
        throw new ErrorHandler("Insert what did you would like to update");

        const UserExists = await this.userRepository.findById(id);
        if(!UserExists)
        throw new ErrorHandler("User doesn't exists.");
        const result = await this.userRepository.update(id,data);
        return UserMapper.toUser(result);
    }
}