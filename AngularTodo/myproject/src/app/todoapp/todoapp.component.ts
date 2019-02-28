import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.css']
})
export class TodoappComponent implements OnInit {

  error: boolean;
  AddedItems: string;
    itemArray:any[];
    errormessage:string;
    itemobject:any;
    status:boolean;
    newtodo: string;
    statuschange:string;
    activeFlag:string;

  constructor( private service: MyserviceService) {
    this.AddedItems='';
    this.itemArray=[];
    this.newtodo=''; 
    this.error = false;
    this.activeFlag ='';
   }

  ngOnInit() {
  if(this.service.get()){
    this.itemArray = this.service.get();
  }
  else{
    this.itemArray=[];
  }
  }
  addFunc():void {

    if(this.AddedItems != ""){
      this.itemobject = { 
        status:false,
        newtodo:this.AddedItems
      }
      this.itemArray.push(this.itemobject);
      this.service.set(this.itemArray);
      this.AddedItems="";
      // console.log(this.itemArray);
      this.error = false;
    } else {
      this.error = true;
    }
  }   

  delete(i){
    this.itemArray.splice(i,1);
    console.log(this.itemArray);
    this.service.set(this.itemArray);
  }

  statuschanger(i){
  
    this.itemArray[i].status= !this.itemArray[i].status;
    console.log(this.itemArray[i].status)
    this.service.set(this.itemArray);
  }
  filter(flag){
    this.activeFlag = flag;
    this.service.set(this.itemArray);
  }   

}
