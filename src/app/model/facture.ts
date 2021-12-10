import {User} from "./User";


export  class Facture{
    idFacture: number ;
    montantRemise: number;
    montantFacture: number;
    dateFacture: Date ;
    active: boolean;
    user: User;
}