import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.css']
})
export class TodoappComponent implements OnInit {

  AddedItems: string;
    itemArray:any[];
    errormessage:string;
    itemobject:any;
    status:boolean;
    newtodo: string;
    statuschange:string;
    flag:any;

  constructor( private service: MyserviceService) {
    this.AddedItems='';
    this.itemArray=[];
    this.newtodo='';
    this.statuschange='Pending';
    
   }

  ngOnInit() {
  console.log(this.service.get());
  if(this.service.get()){
    this.itemArray = this.service.get();
  }
  else{
    this.itemArray=[];
  }
  }
  addFunc():void {

    if(this.AddedItems != ""){
      console.log("1");
      this.itemobject = { 
        status:false,
        newtodo:this.AddedItems
      }
      console.log("2");
      this.itemArray.push(this.itemobject);
      this.service.set(this.itemArray);
      this.AddedItems="";
      console.log(this.itemArray);
    }else{
      alert("empty field");
    }
    // this.service.get();
  }   

  delete(i){
    this.itemArray.splice(i,1);
  }

  statuschanger(i){
    this.itemArray[i].status= !this.itemArray[i].status;
    if( this.itemArray[i].status == true){
      this.statuschange="completed";
    }else{
      this.statuschange="pending";
    }
  }
  // filter(data){
  //   if( data=='true'){
  //     this.flag= true;
  //   }
  //   else if(data =='false'){
  //     this.flag = false;
  //   }
  //   else{
  //     this.flag = '';
  //   }
  // }




}
