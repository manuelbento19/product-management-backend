import { UserRepository } from "../../../repository/implementation/In-Memory/UserRepository";
import { DeleteUserCase } from "./DeleteUserCase";
import { DeleteUserController } from "./DeleteUserController";

const userRepository = UserRepository.getInstance();
const deleteUserCase = new DeleteUserCase(userRepository);
const deleteUserController = new DeleteUserController(deleteUserCase);

export {
    deleteUserController
}