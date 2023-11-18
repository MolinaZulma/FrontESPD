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



// GET:  nationalIdentificationNumber email userName phoneNumber nameRole
// POST:  nationalIdentificationNumber email userName password confirmPassword fullName phoneNumber nameRole
// PUT: email userName password confirmPassword fullName phoneNumber nameRole

// DTO = Data transfer Object 