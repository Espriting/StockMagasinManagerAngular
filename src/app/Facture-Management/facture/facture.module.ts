import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AddFactureComponent} from "./add-facture/add-facture.component";
import {MainFactureComponent} from "./main-facture/main-facture.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { ListfactureComponent } from './listfacture/listfacture.component';
import {CommonModule} from "@angular/common";
import { EditComponent } from './edit/edit.component';


@NgModule({
    declarations: [
        MainFactureComponent,
        AddFactureComponent,
        ListfactureComponent,
        EditComponent,

    ],
    imports: [
        HttpClientModule,
        FormsModule,
        RouterModule,
        CommonModule
    ],
    exports: [
        MainFactureComponent,

    ],
})
export class FactureModule {
}
