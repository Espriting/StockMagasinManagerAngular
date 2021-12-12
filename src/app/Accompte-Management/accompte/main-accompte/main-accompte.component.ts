import { Component, OnInit } from '@angular/core';
import {accompte} from "../../../model/accompte";
import {AccompteService} from "../../service/accompte.service";
import swal from "sweetalert";

@Component({
  selector: 'app-main-accompte',
  templateUrl: './main-accompte.component.html',
  styleUrls: ['./main-accompte.component.css']
})
export class MainAccompteComponent implements OnInit {
list:accompte[];
  showFormTemplate: boolean;
  buttonValue: string;
  inputSearch:any;
  inputAccompt: accompte // the parent component will send this input to the child (formProduct)
  constructor(private accompteService:AccompteService) { }

  ngOnInit(): void {
    this.showFormTemplate = false;
    this.buttonValue="add new Accompte";
    this.accompteService.getAccomptes().subscribe(
        (data)=>{this.list= data
        console.log(this.list)}
    )
  }
  reload(){
    swal("success!", "Deposit updated!", "success");

  }
  save(accomptes: accompte): void{
    let i = this.list.indexOf(accomptes);
    if(i!= -1){
      this.accompteService.modifyAccompte(accomptes).subscribe(
          ()=>{this.list[i]= accomptes;}
      )
    }
    this.accompteService.addClient(accomptes).subscribe(
        ()=>this.list.push(accomptes)
  )
    swal("success!", "Deposit added!", "success");
  }
  showForm(){

      this.inputAccompt = new accompte();
  }
  searchStock(){
    if (this.inputSearch==""){
      this.ngOnInit();
    }else {
      this.list=this.list.filter(res=>
          res.nom.toLocaleLowerCase().match(this.inputSearch.toLocaleLowerCase()))
    }
  }
  delete(accomptes:accompte): void{
    let i = this.list.indexOf(accomptes);
    this.accompteService.removeAccompte(accomptes.idAccompte).subscribe(
        ()=>this.list.splice(i,1)
    )
  }
  update(accomptes: accompte): void{
    //in order to update a product, the parent component will change the input value
    //and send it to the child component
    this.inputAccompt  = accomptes;
    this.showFormTemplate = true;

  }
}
