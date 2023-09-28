import { UserRepository } from "../../../repository/implementation/In-Memory/UserRepository";
import { AuthenticateUserCase } from "./AuthenticateUserCase";
import { AuthenticateUserController } from "./AuthenticateUserController";

const userRepository = UserRepository.getInstance();
const authenticateUserCase = new AuthenticateUserCase(userRepository);
const authenticateUserController = new AuthenticateUserController(authenticateUserCase);

export {
    authenticateUserController
}