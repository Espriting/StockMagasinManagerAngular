import { Component, OnInit } from '@angular/core';
import { AuthService } from './User-Management/service/auth.service';
import { ShowMenuService } from './User-Management/service/show-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GestionMagasin';
  show: Boolean = false;
  local:any
  
  constructor(private authService: AuthService, private showMenuService: ShowMenuService) {
  }

  ngOnInit(): void {
    this.local=this.showMenuService.showMenu().valueOf();

    console.log(this.local)
  }

 

}


