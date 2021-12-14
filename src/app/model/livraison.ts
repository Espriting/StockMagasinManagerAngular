import {Commande} from "./commande";
import {User} from "./User";

export class Livraison {
    idLivraison: number ;
    date: Date ;
    etat: boolean;
    adressse: string;
    commande: Commande;
    user: User
}
