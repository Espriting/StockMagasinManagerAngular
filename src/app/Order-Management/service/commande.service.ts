import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {Commande} from "../../model/commande";
import {User} from "../../model/user";


@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private baseURL=environment.url+"commande";
  private  baseUrlU = environment.url+"api/user"
  private  token: string;
  constructor(private HttpClient: HttpClient) { }

  getCommandesByClient(idOfclient: number){
    return this.HttpClient.get<Commande[]>(this.baseURL+'/retrieve-commannde-client/'+idOfclient);
  }
  getCommandes(){
  /*  const headers=new HttpHeaders().set("Authorization",this.token);*/
    return this.HttpClient.get<Commande[]>(this.baseURL+'/retrieve-all-commanndes'/*,{headers}*/);
  }
  CancelCommande(commande: number){
    console.log("hello")
    return this.HttpClient.put(this.baseURL+'/modify-Commande/'+commande,'');
  }


}
