
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormUserComponent} from './form-user/form-user.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {UserListComponent} from './user-list/user-list.component';
import {UserForgetComponent} from './user-forget/user-forget.component';
import {UserUpdateComponent} from './user-update/user-update.component';


@NgModule({
    declarations: [
        FormUserComponent,
        LoginComponent,
        UserListComponent,
        UserForgetComponent,
        UserUpdateComponent
    ],

    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],

    exports:[
        LoginComponent,
    ]
})
export class userModule { }

