import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {facture} from "src/app/model/facture";
import {FactureService} from "../../service/facture.service";

@Component({
  selector: 'app-add-facture',
  templateUrl: './add-facture.component.html',
  styleUrls: ['./add-facture.component.css']
})
export class AddFactureComponent implements OnInit {
  @Input() facture:facture;
  @Output() addEvent = new EventEmitter<facture>();

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.addEvent.emit(this.facture);
    this.facture = new facture();
  }

}
