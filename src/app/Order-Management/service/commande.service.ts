import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Commande} from "../../model/commande";
import {Facture} from "../../model/facture";


@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private baseURL=environment.url+"commande";
  private baseURL1=environment.url+"facture";

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
    const headers=new HttpHeaders().set("Authorization", this.token);
    return this.HttpClient.get<Commande>(this.baseURL+'/retrieve-commannde/'+idCmd,{headers});
  }
  getfacturesByidUser(iduser: number){
    const headers=new HttpHeaders().set("Authorization", this.token);
    return this.HttpClient.get<Facture[]>(this.baseURL1+'/retrieve-facture-ByClient/'+iduser,{headers});
  }
  getfacturesByCommande(idFacture: number){
    const headers=new HttpHeaders().set("Authorization", this.token);
    return this.HttpClient.get<Commande>(this.baseURL+'/retrieve-commannde-facture/'+idFacture,{headers});
  }
  getfactureById(idFacture: number){
    const headers=new HttpHeaders().set("Authorization", this.token);
    return this.HttpClient.get<Facture>(this.baseURL1+'/retrieve-facture/'+idFacture,{headers});
  }
  addCommadne(cmd: Commande){
    const headers=new HttpHeaders().set("Authorization", this.token);
    return this.HttpClient.post(this.baseURL+'/addCommande',cmd,{headers});
  }
}
