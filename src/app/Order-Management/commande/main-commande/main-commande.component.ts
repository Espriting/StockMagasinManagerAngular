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
    page:number = 1;
    totalLength: number;
    recherche: string;

    constructor(private commandeService: CommandeService, private deliveryService: DeliveryService) {
    }
    ngOnInit(): void {
        this.getCommandes();
        this.totalLength = this.livraisons.length;
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