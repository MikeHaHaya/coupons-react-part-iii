export enum UserType {
    ADMIN = "ADMIN",
    COMPANY = "COMPANY",
    CUSTOMER = "CUSTOMER"
}

// TODO -- Remove 'undefined'
export class UserModel {
    public id: string | undefined;
    public email: string | undefined;
    public password: string | undefined;
    public token: string | undefined;
    public userType: UserType | undefined;
}