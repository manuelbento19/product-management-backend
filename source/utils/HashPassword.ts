import {hash,compare,genSalt} from 'bcrypt';

export class HashPassword{
    async generateHash(password: string) {
        const salt = await genSalt(10);
        const hashedPassword = await hash(password,salt);
        return hashedPassword;
    }
    async IsMatch(password: string, hash: string){
        const isMatch = await compare(password,hash);
        return isMatch;
    }
}