import {Component, OnInit} from '@angular/core';
import {CommandeService} from "../../service/commande.service";
import {DeliveryService} from "../../service/delivery.service";
import {UserService} from "../../../User-Management/service/user.service";
import {Livraison} from "../../../model/livraison";
import {User} from "../../../model/User";
import {Commande} from "../../../model/commande";
import swal from "sweetalert";
import {userModule} from "../../../User-Management/user/user.module";
import {Facture} from "../../../model/facture";

@Component({
    selector: 'app-main-my-order',
    templateUrl: './main-my-order.component.html',
    styleUrls: ['./main-my-order.component.css']
})
export class MainMyOrderComponent implements OnInit {
    user: User;
    livraisons: Livraison[];
    mesfactures: Facture[];
    recherche: string;
    page:number = 1;
    totalLength: number;
    livFact: Livraison[];
    inputCommande: Commande;
    factureAff: Facture[]=[];
    constructor(private commandeService: CommandeService, private deliveryService: DeliveryService, private userService: UserService) {
    }

    ngOnInit(): void {
        this.getCommandesByClient(5);
        this.totalLength = this.livraisons.length;
    }

    getCommandesByClient(idUser: number) {
        this.deliveryService.getLivraisonUser(5).subscribe(
            (data) => {
                this.livraisons = data;
                console.log(this.livraisons)
            }
        );
    }

    cancelCommande(liv: Livraison) {

        if (!liv.commande.etat) {
            swal({
                title: "Voulez vous cette commande?",
                text: "cette commande va être délivré le plus tôt possible",
                icon: "info",
                buttons: ["Cancel", "approuvé"],
                dangerMode: true,
            })
                .then((Upatecmd) => {
                    if (Upatecmd) {
                        liv.commande.etat = !liv.commande.etat;
                        this.commandeService.CancelCommande(liv.commande).subscribe(
                            () => this.getCommandesByClient(5)
                        );
                        swal("Commande va être délivré", {
                            icon: "success",
                        });
                    } else {
                        swal("Merci pour votre confience");
                    }
                });
        } else {
            swal({
                title: "Voulez vous annuler cette commande?",
                text: "cette commande va être annuler ",
                icon: "warning",
                buttons: ["Cancel", "approuvé"],
                dangerMode: true,
            })
                .then((Upatecmd) => {
                    if (Upatecmd) {
                        liv.commande.etat = !liv.commande.etat;
                        this.commandeService.CancelCommande(liv.commande).subscribe(
                            () => this.getCommandesByClient(5)
                        );
                        swal("Commande annulé avec succés", {
                            icon: "success",
                        });
                    } else {
                        swal("Merci pour votre confience");
                    }
                });

        }
    }


    showCmd(idcmd: number) {
        this.commandeService.getCommandesByid(idcmd).subscribe(
            data => this.inputCommande
        )
    }

    getfacture(iduser: number) {
        this.commandeService.getfacturesByidUser(5).subscribe(
            (data) => {
                this.mesfactures = data;
                for (let fac of this.mesfactures) {

                    this.commandeService.getfacturesByCommande(fac.idFacture).subscribe(
                        (data1) => {
                            this.inputCommande = data1;

                            if (this.inputCommande === null) {
                                console.log(fac.idFacture);
                                this.factureAff.push(fac)
                                console.log(this.factureAff)
                            }
                        }
                    )
                }
            }
        );


    }
    Search(){
        if (this.recherche !=""){
            this.livraisons =this.livraisons.filter( res =>{
                return res.adressse.toLocaleLowerCase().match(this.recherche.toLocaleLowerCase())
            })
        }else{
            this.ngOnInit()
        }

    }
}
