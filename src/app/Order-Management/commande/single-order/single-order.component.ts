import {Component, Input, OnInit} from '@angular/core';
import {DeliveryService} from "../../service/delivery.service";
import {Facture} from "../../../model/facture";
import {Livraison} from "../../../model/livraison";
import {Commande} from "../../../model/commande";
import {ActivatedRoute, Router} from "@angular/router";
import {CommandeService} from "../../service/commande.service";
import swal from "sweetalert";
import {User} from "../../../model/User";

@Component({
    selector: 'app-single-order',
    templateUrl: './single-order.component.html',
    styleUrls: ['./single-order.component.css']
})
export class SingleOrderComponent implements OnInit {
    idFac: any;
    closeResult: string;
    facture: Facture;
    liv: Livraison;
    gcmd: Commande;
    today: string;
    thirdDate: Date;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private commandeService: CommandeService,
                private delieveryService: DeliveryService) {
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe(
            (params) => {
                this.idFac = params.get('id')
            }
        )

        this.commandeService.getfactureById(this.idFac).subscribe(
            (data) => {
                this.facture = data;

            })
        console.log(this.idFac)
        this.liv = new Livraison();
        this.thirdDate = new Date()

    }


    save() {
        let cmd = new Commande();
        cmd.dateCommande = this.thirdDate;
        cmd.etat = true;
        cmd.factures = this.facture;
        console.log(this.facture)
        this.commandeService.addCommadne(cmd).subscribe(
            (data)=>{
                this.commandeService.getfacturesByCommande(this.idFac).subscribe(
                    (data) => {
                        this.gcmd = data;
                        console.log(this.gcmd)
                        this.liv.commande = this.gcmd;
                        this.liv.etat = false;
                        this.delieveryService.addLivraison(this.liv).subscribe()
                        this.router.navigateByUrl("/mescommandes")
                    }
                )
            }
        );

        swal("success!", "Commande ajouter avec succés!", "success");

    }


}
