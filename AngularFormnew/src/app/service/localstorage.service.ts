import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }
  
  set(itemarray: object){
    let data : string = JSON.stringify(itemarray);
    localStorage.setItem('datalist',data);
  }

  get(){
    let datastring :string;
    let dataobj: object[];
    datastring = localStorage.getItem('datalist');
    if(datastring){
        dataobj = JSON.parse(datastring);
      } else {
      dataobj = null;
      }
    return dataobj;
    }
}
