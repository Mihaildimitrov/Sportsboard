export class Profile {
    id: string;
    userId: string;
    email: string;
    firstName: string;
    lastName: string;

    constructor(id: string, userId: string, email: string, firstName: string, lastName: string) {
        this.id = id;
        this.userId = userId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}