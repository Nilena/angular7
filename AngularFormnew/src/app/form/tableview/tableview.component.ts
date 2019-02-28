import { Component, OnInit } from '@angular/core';
import { SubmitserviceService } from 'src/app/service/submitservice.service';
import { LocalstorageService } from 'src/app/service/localstorage.service';
import { Router } from '@angular/router';
import  {Subscription } from 'rxjs';


@Component({
  selector: 'app-tableview',
  templateUrl: './tableview.component.html',
  styleUrls: ['./tableview.component.css']
})
export class TableviewComponent implements OnInit {

  itemArray:any;
  receiveempty: any;

//   message: any;
//   subscription: Subscription;

  constructor( private route: Router, 
    private localstore:LocalstorageService,
    private datatransfer: SubmitserviceService ) {}

//      this.subscription = this.datatransfer.getMessage().
//     subscribe( message => { 
//       console.log(message);
//       this.message = message; 
//       console.log("test");
//       console.log(this.message);
//     });
//     console.log(this.subscription);
//     }
//     ngOnDestroy() {
//       // unsubscribe to ensure no memory leaks
//       console.log("destroy");
//       this.subscription.unsubscribe();
//   }

  ngOnInit() {
    if(this.localstore.get()){
     
      this.itemArray = this.localstore.get();
      if( this.itemArray.length == 0){
        this.receiveempty= this.itemArray; 
        console.log("Hello");
      }
      console.log(this.itemArray);
    }
  }
  remove(id){
    this.itemArray.splice(id,1);
    console.log(this.itemArray);
    this.localstore.set(this.itemArray);
    if( this.itemArray.length == 0){
      this.receiveempty= this.itemArray; 
      console.log("Hello");
    }
  }
  edit(id){
  console.log(id);
  this.datatransfer.set(id);
  this.route.navigate(['register',{id}]);
  }


}
