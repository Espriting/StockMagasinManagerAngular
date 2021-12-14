import {Component, OnInit} from '@angular/core';
import {Livraison} from "../../../model/livraison";
import {DeliveryService} from "../../service/delivery.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-main-livreur-commannde',
    templateUrl: './main-livreur-commannde.component.html',
    styleUrls: ['./main-livreur-commannde.component.css']
})
export class MainLivreurCommanndeComponent implements OnInit {
    livraisonssss: Livraison[];
    inputtLivraison: Livraison;
     bt:boolean = true;
    page:number = 1;
    totalLength: number;
    constructor(public delieveryService: DeliveryService) {
    }

    ngOnInit(): void {
        this.delieveryService.getLivraisonByEtat().subscribe(
            (data) => {
                this.livraisonssss = data
                console.log(this.livraisonssss)
            }

        )
        this.totalLength = this.livraisonssss.length;

    }

    update(livrarison: Livraison): void{
        let i = this.livraisonssss.indexOf(livrarison);
        this.livraisonssss.splice(i,1);
        this.inputtLivraison = livrarison;
    }

}
