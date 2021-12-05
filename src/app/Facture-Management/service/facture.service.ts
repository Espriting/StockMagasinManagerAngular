import { HttpClient } from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import { environment } from 'src/environments/environment';
import {facture} from "src/app/model/facture";


@Injectable({
    providedIn: 'root'
})
export class FactureService {

    private baseURL =environment.url + "facture";

    constructor(private HttpClient: HttpClient) {
    }

    getFactures(): Observable<any> {
        return this.HttpClient.get(this.baseURL + '/retrieve-all-factures');
    }
    addFacture(facture:facture){
        return this.HttpClient.post(this.baseURL+'/add-facture',JSON.stringify(facture));
    }
    modifyFacture(facture: facture){
        return this.HttpClient.put(this.baseURL+'/modify-facture',facture);
    }

    retrieveFacture(idFacture:number){
        return this.HttpClient.get(this.baseURL+'/retrieve-facture/'+idFacture);
    }
    deleteFactureById(idFacture:number){
        return this.HttpClient.delete(this.baseURL+'/remove-facture/'+idFacture);
    }

}
