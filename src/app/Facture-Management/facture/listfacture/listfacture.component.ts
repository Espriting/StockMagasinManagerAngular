import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {FactureService} from "../../service/facture.service";
import {facture} from "src/app/model/facture";
import {Product} from "../../../model/product";

@Component({
  selector: 'app-listfacture',
  templateUrl: './listfacture.component.html',
  styleUrls: ['./listfacture.component.css']
})
export class ListfactureComponent implements OnInit {
  @Input() facture: facture;
  @Output() deleteNotifEvent = new EventEmitter<facture>();
  @Output() updateNotifEvent = new EventEmitter<facture>();

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

  }
  deleteNotif() {
    this.deleteNotifEvent.emit(this.facture)
  }
  updateNotif(){
    this.updateNotifEvent.emit(this.facture)
  }


}
