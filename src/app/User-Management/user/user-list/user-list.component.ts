import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/User";
import {AuthService} from "../../service/auth.service";
import {UserService} from "../../service/user.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users : User[];

  constructor(public authService: AuthService,private userService : UserService) { }

  ngOnInit(): void {

     localStorage.getItem('access_token');
    this.userService.getUsersList().subscribe(prods => {
      console.log(prods);
      this.users = prods;
    });
  }
  supprimerUser(u: User)
  {
    console.log("suppppppppppppppppppppppppppppp supprimé");
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.userService.deleteUser(u.id).subscribe(() => {
        console.log("produit supprimé");
        this.SuprimerProduitDuTableau(u);
      });
  }
  SuprimerProduitDuTableau(usr : User) {
    this.users.forEach((cur, index) => {
      if(usr.id=== cur.id) {
        this.users.splice(index, 1);
      }
    });
  }


}
