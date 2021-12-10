import {Facture} from "./facture";

export class Commande {
    idCommande: number ;
    dateCommande: Date ;
    etat: boolean;
    factures: Facture;
}
