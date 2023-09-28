import { IUserRepository } from "../../../repository/IUserRepository";
import { ErrorHandler } from "../../../utils/ErrorHandler";

export class ListUsersCase{
    constructor(private userRepository: IUserRepository){

    }

    async execute(){
        const result = await this.userRepository.show();
        return result;
    }
}