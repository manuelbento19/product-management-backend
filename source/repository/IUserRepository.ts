import { User } from "../entities/User";

export interface IUserRepository{
    save(data: User): Promise<User>;
    findById(id: string): Promise<User | undefined>;
    findByEmail(id: string): Promise<User | undefined>;
    show(): Promise<User[]>; 
    delete(id: string): Promise<void>
    update(id: string, data: User):  Promise<User>;
}