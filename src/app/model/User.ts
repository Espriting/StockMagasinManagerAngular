
import {Role} from "./Role";


export class User{
    id: number;
    nom: string;
    prenom: string;

    dateNaissance: Date;
    email: string;
    password: string;
    roles:Role[];



}
