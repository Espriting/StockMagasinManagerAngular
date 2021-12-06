import {Component, OnInit} from '@angular/core';
import {User} from "../../../model/user";
import {CommandeService} from "../../service/commande.service";
import {DeliveryService} from "../../service/delivery.service";
import {Commande} from "../../../model/commande";

@Component({
    selector: 'app-main-my-order',
    templateUrl: './main-my-order.component.html',
    styleUrls: ['./main-my-order.component.css']
})
export class MainMyOrderComponent implements OnInit {
    date: Date = new Date("1998-11-05");
    user1: User = {
        id: 5,
        categorie: "",
        email: "Travolta@outlook.fr",
        nom: "Travolta",
        password: "$2a$10$itIsSV5Pe8BIvO/y/2oF0..pyZxAdHGdxB0DXd.ig7YVR073dqlFu",
        date_naissance: this.date,
        prenom: "John",
    };
    commandes: any[];
    livraisons: any[];

    constructor(private commandeService: CommandeService, private deliveryService: DeliveryService) {
    }

    ngOnInit(): void {
        this.getCommandesByClient();
    }

    getCommandesByClient() {
        this.commandeService.getCommandesByClient(this.user1.id).subscribe(
            (data) => {
                this.commandes = data;
                console.log(this.commandes)
                for (let k of this.commandes) {
                    this.deliveryService.getLivraisonesByCommande(k.idCommande).subscribe(
                        (data1) => {
                            this.livraisons = data1;
                            console.log(this.livraisons)
                        }
                    )
                }
            }
        );
    }
    cancelCommande(commande: number){

        this.commandeService.CancelCommande(commande);
    }

}
