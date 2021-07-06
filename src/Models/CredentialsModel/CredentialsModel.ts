import {UserType} from "../UserModel/UserModel";

class CredentialsModel {
    public email: string;
    public password: string;
    public userType: UserType;
}

export default CredentialsModel;