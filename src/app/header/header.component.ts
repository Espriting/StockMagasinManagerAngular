import { Component, OnInit } from '@angular/core';
import { AuthService } from '../User-Management/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
    //location.assign("/login");
    window.location.reload();
    location.assign("/login");
  }

}
