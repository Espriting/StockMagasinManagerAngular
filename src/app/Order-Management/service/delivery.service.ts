import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Livraison} from "../../model/livraison";
import {Observable} from "rxjs";
import {User} from "../../model/User";

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

}
