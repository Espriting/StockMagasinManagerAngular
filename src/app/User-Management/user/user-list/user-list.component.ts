import {Component, OnInit} from '@angular/core';
import {User} from "../../../model/User";
import {AuthService} from "../../service/auth.service";
import {UserService} from "../../service/user.service";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    users: User[];

    constructor(public authService: AuthService, private userService: UserService) {
    }

    ngOnInit(): void {
        localStorage.getItem('tokenUser');
        this.getUser();
    }

    getUser() {
        this.userService.getUsersList().subscribe(
            data => {
                console.log(data);
                this.users = data;
            }
        );
    }



    delete(user: User) {
        console.log("suppppppppppppppppppppppppppppp supprimé");
        let conf = confirm("Etes-vous sûr ?");
        let i = this.users.indexOf(user);
        if (conf)
            this.userService.deleteUser(user.id).subscribe((data: any) => {
                this.users.splice(i, 1)
                console.log(i)
            });
    }


}
