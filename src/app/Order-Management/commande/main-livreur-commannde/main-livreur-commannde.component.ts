import {Component, OnInit} from '@angular/core';
import {Livraison} from "../../../model/livraison";
import {DeliveryService} from "../../service/delivery.service";

@Component({
    selector: 'app-main-livreur-commannde',
    templateUrl: './main-livreur-commannde.component.html',
    styleUrls: ['./main-livreur-commannde.component.css']
})
export class MainLivreurCommanndeComponent implements OnInit {
    livraisonssss: Livraison[];

    constructor(public delieveryService: DeliveryService) {
    }

    ngOnInit(): void {
        this.delieveryService.getLivraisonByEtat().subscribe(
            (data) => {
                this.livraisonssss = data
                console.log(this.livraisonssss)
            }

        )

    }



}
