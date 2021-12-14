import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Commande} from "../../../model/commande";
import {ActivatedRoute, Router} from "@angular/router";
import {Facture} from "../../../model/facture";
import {Livraison} from "../../../model/livraison";

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})
export class ShowOrderComponent implements OnInit {
  @Input() mesfactures: Facture[];
  command: Commande;
  liv: Livraison;
   public  SingleCmd : boolean;
  constructor(private route: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
    this.mesfactures;
    this.SingleCmd = false;
  }

  navigateToSingle(){
    this.SingleCmd = true;
  }

}
