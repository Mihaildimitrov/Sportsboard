export class SignUpCredentials implements ISignUpCredentials {
    email: string;
    password: string;
    firstName: string;
    lastName: string;

    constructor(email: string, password: string, firstName: string, lastName: string) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

export interface ISignUpCredentials {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }
  