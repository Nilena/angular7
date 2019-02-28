import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  data:object = {};
private apiurl ='https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple';
  constructor( private http:HttpClient ) {
    this.getData();
   }

  ngOnInit() {
  }

  getData(){
    this.http.get(this.apiurl).subscribe(
      data => {
        this.data = data; 
           // FILL THE ARRAY WITH DATA.
           if(data){
            console.log(this.data['results']);
           }else{
             console.log("empty");
           }
      })
  }
  }
   