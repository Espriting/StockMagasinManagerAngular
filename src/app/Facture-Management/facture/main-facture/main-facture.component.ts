import { Component, OnInit } from '@angular/core';
import {facture} from "src/app/model/facture";
import {FactureService} from "../../service/facture.service";

import swal from "sweetalert";

@Component({
  selector: 'app-main-facture',
  templateUrl: './main-facture.component.html',
  styleUrls: ['./main-facture.component.css']
})
export class MainFactureComponent implements OnInit {
    buttonvalue:string;
    factures:facture[];
    Inputfacture:facture;


  constructor(private factureService:FactureService) { }

  ngOnInit(): void {
      this.factureService.getFactures().subscribe(
          data => {
              this.factures = data;
              console.log(data)
          }
      );
      this.Inputfacture = new facture();
  }
    save(facture:facture): void {

        let i = this.factures.indexOf(facture);

        if (i != -1) {

            // @ts-ignore
            this.factureService.modifyFacture().subscribe(() => this.factures[i] = facture);
            swal("success!", "Bill updated!", "success");

        }
        else {

            this.factureService.addFacture(facture).subscribe(() => this.factures.push(facture));
            swal("success!", "Bill added!", "success");

        }
    }


    showForm() {

        this.Inputfacture= new facture();

    }
    update(facture:facture): void {

        this.Inputfacture= facture;

    }

    delete(facture: facture): void {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this bill!",
            icon: "warning",
            buttons: ["Cancel", "Confirm"],
            dangerMode: true,
        })
            .then((willDelete) => {

                if (willDelete) {
                    let i = this.factures.indexOf(facture);
                    this.factureService.deleteFactureById(facture.idFacture).subscribe(data => {
                        this.factures.splice(i, 1)
                    });
                    swal("Bill has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Bill  is safe!");
                }
            });

    }

}


