import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Commande} from "../../model/commande";
import {User} from "../../model/user";


@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private baseURL=environment.url+"commande";
  private  baseUrlU = environment.url+"api/user"
  constructor(private HttpClient: HttpClient) { }

  getCommandesByClient(idOfclient: number){
    return this.HttpClient.get<Commande[]>(this.baseURL+'/retrieve-commannde-client/'+idOfclient);
  }
  getUser(idUser: number){
    return this.HttpClient.get<User>(this.baseUrlU+'/getUserById/'+idUser);
  }


}
