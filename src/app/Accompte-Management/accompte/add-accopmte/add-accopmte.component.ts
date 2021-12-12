import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {accompte} from "../../../model/accompte";

@Component({
  selector: 'app-add-accopmte',
  templateUrl: './add-accopmte.component.html',
  styleUrls: ['./add-accopmte.component.css']
})
export class AddAccopmteComponent implements OnInit {
  @Input() accompte:accompte;
  @Output() addEvent = new EventEmitter<accompte>();

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.addEvent.emit(this.accompte);
    this.accompte = new accompte();
  }

}
