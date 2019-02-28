
import { Component, OnInit } from  '@angular/core';

import { Observable } from  "rxjs";

import { HttpClient } from  "@angular/common/http";
class  Customer {

  id : number;
  
  name: string;
  
  email: string;
  
  tel: string;
  
  }
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customersObervable : Observable<Customer[]>;
  constructor( private httpClient:HttpClient) { }

  ngOnInit() {
    this.customersObervable = this.httpClient.get<Customer[]>("127.0.0.1:3000/customers");
  }

}
