import {roles} from "./roles";

export class User{
    id: number;
    nom: string;
    prenom: string;
    dateNaissance: Date;
    email: string;
    password: string;
    roles:roles[];


}
