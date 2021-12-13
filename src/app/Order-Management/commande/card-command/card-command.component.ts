import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Livraison} from "../../../model/livraison";

@Component({
  selector: 'app-card-command',
  templateUrl: './card-command.component.html',
  styleUrls: ['./card-command.component.css']
})
export class CardCommandComponent implements OnInit {
  @Input()livraison : Livraison;
  @Output() updateNotifCmd = new EventEmitter<Livraison>();
  constructor() { }

  ngOnInit(): void {
    this.livraison
    console.log(this.livraison)
  }
  updateNotif(){
    this.updateNotifCmd.emit(this.livraison)
  }
}
