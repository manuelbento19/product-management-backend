import { User } from "../entities/User";

export abstract class UserMapper{
    static toUser(data:User){
        return {
            id: data.id,
            name: data.name,
            email: data.email,
        }
    }
}