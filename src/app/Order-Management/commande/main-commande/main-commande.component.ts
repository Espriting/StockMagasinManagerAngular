import {Component, OnInit} from '@angular/core';
import {Commande} from "../../../model/commande";
import {CommandeService} from "../../service/commande.service";
import {User} from "../../../model/user";
import {Product} from "../../../model/product";
import {DeliveryService} from "../../service/delivery.service";
import {Livraison} from "../../../model/livraison";

@Component({
    selector: 'app-main-commande',
    templateUrl: './main-commande.component.html',
    styleUrls: ['./main-commande.component.css']
})
export class MainCommandeComponent implements OnInit {
    user: User;

    commandes: any[];
    livraisons: any[];
    user1: User;
    constructor(private commandeService: CommandeService, private deliveryService: DeliveryService) {
    }

    ngOnInit(): void {
        this.getCommandesByClient();
    }

    getCommandesByClient() {
        this.commandeService.getCommandesByClient(5).subscribe(
            (data) => {
                this.commandes = data;
                console.log(this.commandes)
                for (let k of this.commandes) {

                    this.deliveryService.getLivraisonesByCommande(k.idCommande).subscribe(
                        (data1) => {
                            this.livraisons = data1;
                            console.log(this.livraisons)
                            for (let l of this.livraisons){
                                this.commandeService.getUser(l.idUser).subscribe(

                                )
                            }
                        }
                    )
                }
            }
        );


    }
}