import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private baseURL=environment.url+"commande";

  constructor() { }
}
