import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import { HttpClient } from '@angular/common/http';
import {accompte} from "src/app/model/accompte";




@Injectable({
    providedIn: 'root'
})
export class AccompteService {

    private baseURL =environment.url + "accompte";

    constructor(private HttpClient: HttpClient) {
    }

    getAccomptes(): Observable<any> {
        return this.HttpClient.get(this.baseURL + '/retrieve-all-accomptes');
    }
    addClient(accompte:accompte){
        return this.HttpClient.post(this.baseURL+'/add-accompte',accompte);
    }
    modifyAccompte(accompte:accompte){
        return this.HttpClient.put(this.baseURL+'/modify-accompte',accompte);
    }

    retrieveAccompte(idAccompte:number){
        return this.HttpClient.get(this.baseURL+'/retrieve-accompte/'+idAccompte);
    }
    removeAccompte(idAccompte:number){
        return this.HttpClient.delete(this.baseURL+'/remove-accompte/'+idAccompte);
    }

}
