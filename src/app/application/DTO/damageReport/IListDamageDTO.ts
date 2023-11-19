export interface IListDamageDTO {
    data:       Data;
    message:    null;
    succeed:    boolean;
    errors:     null;
    statusCode: number;
}

export interface Data {
    id:                number;
    addressDamage:     string;
    descriptionDamage: string;
    image:             string;
    trueInformation:   string;
    typeDamage:        string;
    idUser:            string;
    userFullName:      null;
}