import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  constructor() { }
   set(itemArray: Object){
     let datastring:string;
     datastring = JSON.stringify(itemArray);
     localStorage.setItem('datalist',datastring);
   }

   get(){
     let datastring :string;
     let data: object[];
     datastring = localStorage.getItem('datalist');
     if(datastring){
      data = JSON.parse(datastring);
     } else {
       data = null;
     }
     return data;
   }
}
