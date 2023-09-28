import { UserRepository } from "../../../repository/implementation/In-Memory/UserRepository";
import { CreateUserCase } from "./CreateUserCase";
import { CreateUserController } from "./CreateUserController";

const userRepository = UserRepository.getInstance();
const createUserCase = new CreateUserCase(userRepository);
const createUserController = new CreateUserController(createUserCase);

export {
    createUserController
}