import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubmitserviceService {

  private subject = new Subject<any>();

  // sendMessage( message:string ){
  //   this.subject.next({text:message});
  //   console.log(message);
  // }
  // clearMessage() {
  //   this.subject.next();
  // }
  // getMessage(): Observable<any> {
  //   return this.subject.asObservable();
  // }
  data: any;
  constructor() { }

set(value){
  this.data = value;
}
get(key){
  try {
    return this.data;
  	} finally {
    this.data = null;
}
 
}

}