export class User{
    public id?:string;
    public name: string;
    public email: string;
    public password: string;
    public created_At?: Date;

    constructor(data: Pick<User,"name"|"email"|"password">){
        Object.assign(this,data);
    }
}