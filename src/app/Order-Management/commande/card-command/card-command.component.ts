import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Livraison} from "../../../model/livraison";
import {UserService} from "../../../User-Management/service/user.service";
import {User} from "../../../model/User";
import {DeliveryService} from "../../service/delivery.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-card-command',
  templateUrl: './card-command.component.html',
  styleUrls: ['./card-command.component.css']
})
export class CardCommandComponent implements OnInit {
  @Input()livraison : Livraison;
  @Input()showButtonLiv: boolean;
  @Output() updateNotifCmd = new EventEmitter<Livraison>();
  user: User;
  constructor(public userService: UserService,
              public  deliveryService: DeliveryService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.livraison;
    console.log(this.livraison)
  }
  updateNotif(){
      if(!this.livraison.etat){
          this.livraison.etat = !this.livraison.etat;
          this.userService.getUserById(8).subscribe(
              (data)=>{
                  this.user = data;
                  this.livraison.date = new Date();
                  this.livraison.user = this.user;
                  this.deliveryService.updateLivraioson(this.livraison).subscribe()
                  this.updateNotifCmd.emit(this.livraison)
              }
          )
      }else {
          this.livraison.etat = !this.livraison.etat;
          this.user= new User();
          this.livraison.user =this.user;
          this.livraison.date = new Date();
          this.deliveryService.updateLivraioson(this.livraison).subscribe()
          this.updateNotifCmd.emit(this.livraison)
      }







  }
}
