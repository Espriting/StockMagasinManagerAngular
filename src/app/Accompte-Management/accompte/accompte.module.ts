import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import { MainAccompteComponent } from './main-accompte/main-accompte.component';
import { AddAccopmteComponent } from './add-accopmte/add-accopmte.component';

@NgModule({
    declarations: [
        MainAccompteComponent,
        AddAccopmteComponent,

    ],
    imports: [
        FormsModule,
        RouterModule,
        CommonModule
    ],
    exports: [

        MainAccompteComponent


    ],
})
export class AccompteModule {
}
