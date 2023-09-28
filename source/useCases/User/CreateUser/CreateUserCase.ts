import { User } from "../../../entities/User";
import { UserMapper } from "../../../mapper/UserMapper";
import { IUserRepository } from "../../../repository/IUserRepository";
import { ErrorHandler } from "../../../utils/ErrorHandler";
import { HashPassword } from "../../../utils/HashPassword";
import { CreateUserDTO } from "./CreateUserDTO";

export class CreateUserCase{
    constructor(private userRepository: IUserRepository){}

    async execute(data: CreateUserDTO){
        if(!data.name)
        throw new ErrorHandler("Name can't be empty");
        if(!data.email)
        throw new ErrorHandler("Email can't be empty")
        if(!data.password)
        throw new ErrorHandler("Password can't be empty")

        const userExists = await this.userRepository.findByEmail(data.email);
        if(userExists)
        throw new ErrorHandler("User already exists.");
        
        const hashPassword = new HashPassword();
        const hashedPassword = await hashPassword.generateHash(data.password);
        
        const user = new User({
            ...data,
            password: hashedPassword
        });

        const result = await this.userRepository.save(user);
        return UserMapper.toUser(result); 
    }
}