export interface IListWaterControlDTO {
    id:                           number;
    totalHours:                   number;
    amountWaterCaptured:          number;
    amountWaterSupplied:          number;
    aluminumSulfate:              number;
    sodiumHypochlorite:           number;
    chlorineGas:                  number;
    particlesPerMillion:          number;
    nationalIdentificationNumber: string;
    userFullName:                 string;
    idPlant:                      number;
    namePlant:                    string;
}
