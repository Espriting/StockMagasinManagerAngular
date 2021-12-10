import {Component, Input, OnInit} from '@angular/core';
import {Commande} from "../../../model/commande";
import {DeliveryService} from "../../service/delivery.service";

@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.css']
})
export class SingleOrderComponent implements OnInit {
@Input()cmd :any;
  livraisons: any[];

  constructor( private deliveryService: DeliveryService) { }

  ngOnInit(): void {
  }
  getCommandes() {

/*
    this.deliveryService.getLivraisonesByCommande(this.cmd.idCommande).subscribe(
        (data1) => {
          this.livraisons = data1;
          console.log(this.livraisons)
        }
    )*/
  }

}
