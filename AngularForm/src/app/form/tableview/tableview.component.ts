import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableview',
  templateUrl: './tableview.component.html',
  styleUrls: ['./tableview.component.css']
})
export class TableviewComponent implements OnInit {

  dataToParent:string;
  evReceive: string;
  constructor() {
    this.dataToParent = "Hello Parent";
  }

  ngOnInit() {
  }

  getData(data) {
    this.evReceive = data;
    console.log(data);
  }

}
