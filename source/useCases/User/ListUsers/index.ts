import { UserRepository } from "../../../repository/implementation/In-Memory/UserRepository";
import { ListUsersCase } from "./ListUsersCase";
import { ListUsersController } from "./ListUsersController";

const userRepository = UserRepository.getInstance();
const listUsersCase = new ListUsersCase(userRepository);
const listUsersController = new ListUsersController(listUsersCase);

export {
    listUsersController
}