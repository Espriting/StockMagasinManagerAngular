import {roles} from "./roles";

export class User{
    id: number;
    nom: string;
    prenom: string;
    dateNaissance: any;
    email: string;
    password: string;
    roles:roles[];
    categorie: string;
    picture: string;



}
