export class User {
    id!: string;
    username?: string;
    password?: string;
    email?: string

    constructor(username: string, email: string, password: string) {
        debugger
        this.id = String(Math.round(Math.random() * 1000));
        this.username = username;
        this.password = password;
        this.email = email;
    }
}