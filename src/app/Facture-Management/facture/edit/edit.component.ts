import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FactureService} from "../../service/facture.service";
import {facture} from "../../../model/facture";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
facture:facture;
  constructor(public factureService:FactureService,private route: ActivatedRoute,private router: Router,) { }

  ngOnInit(): void {
  }
  updateFacture() {
    this.factureService.modifyFacture( this.facture)
        .subscribe(data => {
          console.log(data);
          this.facture = new facture();
          this.gotoList();
        }, error => console.log(error));
  }


  gotoList() {
    this.router.navigate(['/factures']);
  }
}
