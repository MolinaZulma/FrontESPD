export interface IAccountModel {
    id:                           string;
    nationalIdentificationNumber: string;
    email:                        string;
    userName:                     string;
    password:                     string;
    confirmPassword:              string;
    fullName:                     string;
    phoneNumber:                  string;
    nameRole:                     string;
    roles:                        string[];
    isVerified:                   boolean;

}
