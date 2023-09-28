import { UserRepository } from "../../../repository/implementation/In-Memory/UserRepository";
import { UpdateUserCase } from "./UpdateUserCase";
import { UpdateUserController } from "./UpdateUserController";

const userRepository = UserRepository.getInstance();
const updateUserCase = new UpdateUserCase(userRepository);
const updateUserController = new UpdateUserController(updateUserCase);

export {
    updateUserController
}