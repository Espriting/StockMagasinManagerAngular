import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Commande} from "../../model/commande";
import {Livraison} from "../../model/livraison";

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  private baseURL=environment.url+"livraison";
  constructor(private HttpClient: HttpClient) { }

  getLivraisonesByCommande(id: number){
    return this.HttpClient.get<Livraison[]>(this.baseURL+'/retrieve-Livraison-commande/'+id);
  }
}
