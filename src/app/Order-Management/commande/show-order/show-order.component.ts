import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Commande} from "../../../model/commande";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})
export class ShowOrderComponent implements OnInit {
  @Input() commande: Commande;
  @Output() ShowEvent = new EventEmitter<Commande>();
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
