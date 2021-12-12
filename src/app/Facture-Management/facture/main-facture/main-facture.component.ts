import { Component, OnInit ,ViewChild, ElementRef} from '@angular/core';
import {facture} from "src/app/model/facture";
import {FactureService} from "../../service/facture.service";
import swal from "sweetalert";
import {Router} from "@angular/router";
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-main-facture',
  templateUrl: './main-facture.component.html',
  styleUrls: ['./main-facture.component.css']
})
export class MainFactureComponent implements OnInit {
    buttonvalue:string;
    factures:facture[];
    Inputfacture:facture;
    showFormTemplate: boolean;
    filterTerm: string;
    inputSearch:any;

    constructor(private factureService:FactureService, private router: Router) { }
  ngOnInit(): void {
      this.showFormTemplate = false;
      this.factureService.getFactures().subscribe(
          data => {
              this.factures = data

              console.log(data)
          },
          (error)=>console.log(error),
          ()=>{this.factures.forEach((fact)=>fact.dateFacture=new Date(fact.dateFacture))}
      );

      this.Inputfacture = new facture();
  }
    fileName= 'ExcelSheet.xlsx';

    exportexcel(): void
    {
        /* table id is passed over here */
        let element = document.getElementById('excel-table');
        const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

        /* generate workbook and add the worksheet */
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

        /* save to file */
        XLSX.writeFile(wb, this.fileName);

    }
    reload(){
        swal("success!", "Bill updated!", "success");

    }
    save(facture:facture): void {

        let i = this.factures.indexOf(facture);

        if (i != -1) {

            // @ts-ignore
            this.factureService.modifyFacture().subscribe(() => this.factures[i] = facture);
            swal("success!", "Bill updated!", "success");

        }
        else {

            this.factureService.addfacture(facture).subscribe(() => this.factures.push(facture));
            console.log(facture)
            swal("success!", "Bill added!", "success");

        }
    }


    showForm() {

        this.Inputfacture= new facture();

    }
    update(facture:facture): void {
        this.router.navigate(['update']);


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


