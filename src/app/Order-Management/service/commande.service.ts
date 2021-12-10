import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Commande} from "../../model/commande";


@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private baseURL=environment.url+"commande";
  public tokenUser=localStorage.getItem('tokenUser');
  public token=this.tokenUser!;
  constructor(private HttpClient: HttpClient) { }

  getCommandesByClient(idOfclient: number){
    return this.HttpClient.get<Commande[]>(this.baseURL+'/retrieve-commannde-client/'+idOfclient);
  }
  getCommandes(){
    const headers=new HttpHeaders().set("Authorization",this.token);
    return this.HttpClient.get<Commande[]>(this.baseURL+'/retrieve-all-commanndes',{headers});
  }
  CancelCommande(commande: Commande){
    console.log("hello")
    const headers=new HttpHeaders().set("Authorization", this.token);
    return this.HttpClient.put(this.baseURL+'/modify-Commande',commande,{headers});
  }
  getCommandesByid(idCmd: number){
    return this.HttpClient.get<Commande>(this.baseURL+'/retrieve-commannde/'+idCmd);
  }

}
