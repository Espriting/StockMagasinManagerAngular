import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Livraison} from "../../model/livraison";
import {Observable} from "rxjs";
import {User} from "../../model/User";
import {Commande} from "../../model/commande";

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  private baseURL=environment.url+"livraison";
  public tokenUser=localStorage.getItem('tokenUser');
   token=this.tokenUser!;
  constructor(private HttpClient: HttpClient) { }



  getAllLivraison(){
    const headers=new HttpHeaders().set("Authorization", this.token);
    return this.HttpClient.get<Livraison[]>(this.baseURL+'/retrieve-all-Livraisons', {headers});
  }
  getLivraisonUser(idClient: number){
    const headers=new HttpHeaders().set("Authorization", this.token);
    return this.HttpClient.get<Livraison[]>(this.baseURL+'/retrieve-Livraison-client/'+idClient ,{headers});
  }
  addLivraison(liv: Livraison){
    const headers=new HttpHeaders().set("Authorization", this.token);
    return this.HttpClient.post(this.baseURL+'/addLivraison/',liv,{headers});
  }
  getLivraisonByEtat(){
    const headers=new HttpHeaders().set("Authorization", this.token);
    return this.HttpClient.get<Livraison[]>(this.baseURL+'/retrieve-Livraison-etat/',{headers});
  }
  updateLivraioson(livraison: Livraison){
    const headers=new HttpHeaders().set("Authorization", this.token);
    return this.HttpClient.put(this.baseURL+'/modify-Livraison/',livraison,{headers});

  }
  getLivraisonLivreur(idLivreur: number){
    const headers=new HttpHeaders().set("Authorization", this.token);
    return this.HttpClient.get<Livraison[]>(this.baseURL+'/retrieve-Livraison-livreur/'+idLivreur ,{headers});
  }
}
