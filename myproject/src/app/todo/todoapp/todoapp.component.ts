import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.css']
})
export class TodoappComponent implements OnInit {

  AddedItems: string;
    ItemArray:any[];
    errormessage:string;

  constructor() {
    this.AddedItems='';
    this.ItemArray= [];
   }

  ngOnInit() {
  
  }
  addFunc(data):void {
    // if(data==null){
    //   this.errormessage="Empty field";
    // }
    this.ItemArray.push(this.AddedItems);
    this.AddedItems="";
    console.log(this.ItemArray);

  }

}
