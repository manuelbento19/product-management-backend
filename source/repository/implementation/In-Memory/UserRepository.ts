import { randomUUID } from "node:crypto";
import { User } from "../../../entities/User";
import { IUserRepository } from "../../IUserRepository";
import { IteratorMapper } from "../../../types/Iterator";

export class UserRepository implements IUserRepository{
    private users: User[];
    public static instance: IUserRepository;

    private constructor(){
        this.users = [];
    }
    public static getInstance(){
        if(!this.instance){
            this.instance = new UserRepository;
        }
        return this.instance;
    }

    async save(data: User): Promise<User> {
        const newUser = {
            id: randomUUID(),
            created_At: new Date(),
            ...data,
        }
        this.users.push(newUser);
        return newUser;
    }
    async findById(id: string): Promise<User | undefined> {
        const result = this.users.find(User=>User.id===id);
        return result;
    }
    async findByEmail(email: string): Promise<User | undefined> {
        const result = this.users.find(user=>user.email===email);
        return result;
    }
    async show(): Promise<User[]> {
        return this.users;
    }
    async update(id: string, data: User){
        const index = this.users.findIndex(item=>item.id===id);
        const user: IteratorMapper = this.users[index];
        
        for(let [key,value] of Object.entries(data)){
            if(value && key!='id') user[key] = value;
        }
        return this.users[index];
    };
    async delete(id: string): Promise<void> {
        this.users = this.users.filter(user=>user.id!==id);
    }
    
}