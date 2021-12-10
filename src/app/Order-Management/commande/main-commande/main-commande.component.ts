import {Component, OnInit} from '@angular/core';
import {CommandeService} from "../../service/commande.service";
import {DeliveryService} from "../../service/delivery.service";
import {Livraison} from "../../../model/livraison";
import swal from "sweetalert";

@Component({
    selector: 'app-main-commande',
    templateUrl: './main-commande.component.html',
    styleUrls: ['./main-commande.component.css']
})
export class MainCommandeComponent implements OnInit {
    livraisons: Livraison[];
    constructor(private commandeService: CommandeService, private deliveryService: DeliveryService) {
    }
    ngOnInit(): void {
        this.getCommandes();
    }

    getCommandes() {
        this.deliveryService.getAllLivraison().subscribe(
            (data) => {
                this.livraisons = data;
            }
        );
    }
    detailModal2(){
        swal("Commande a été annulé ", {
            icon: "error",
        });
    }
}