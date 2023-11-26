export interface IListFormatPTAPDTO {
    id:                           number;
    typeWater:                    string;
    temperature:                  number;
    alkalinityPh:                 number;
    alkalineChlorine:             number;
    alkalineInitialReading:       number;
    alkalineFinalReading:         number;
    alkalineTotal:                number;
    alkaline:                     number;
    chlorineGas:                  number;
    particlesPerMillion:          number;
    nationalIdentificationNumber: string;
    userFullName:                 null;
    idPlant:                      number;
    namePlant:                    null;
}
