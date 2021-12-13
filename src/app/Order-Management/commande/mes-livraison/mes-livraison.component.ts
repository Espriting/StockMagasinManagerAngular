import { Component, OnInit } from '@angular/core';
import {Livraison} from "../../../model/livraison";
import {DeliveryService} from "../../service/delivery.service";

@Component({
  selector: 'app-mes-livraison',
  templateUrl: './mes-livraison.component.html',
  styleUrls: ['./mes-livraison.component.css']
})
export class MesLivraisonComponent implements OnInit {
  meslivraisons: Livraison[];
  inputtLivraison: Livraison;
  bt:boolean = false;

  constructor(public delieveryService: DeliveryService) { }

  ngOnInit(): void {
    this.delieveryService.getLivraisonLivreur(8).subscribe(
        (data) => {
          this.meslivraisons = data
        }

    )
  }
  update(livrarison: Livraison): void{
    let i = this.meslivraisons.indexOf(livrarison);
    this.meslivraisons.splice(i,1);
    this.inputtLivraison = livrarison;
  }

}
