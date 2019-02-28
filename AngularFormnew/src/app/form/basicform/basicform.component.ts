import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import {  FormGroup, FormControl } from '@angular/forms';
import { customValidation } from './customvalidator';
import { Validators } from '@angular/forms';
import { SubmitserviceService } from 'src/app/service/submitservice.service';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';
import { LocalstorageService } from 'src/app/service/localstorage.service';
import  {Subscription } from 'rxjs';

@Component({
  selector: 'app-basicform',
  templateUrl: './basicform.component.html',
  styleUrls: ['./basicform.component.css']
})
export class BasicformComponent implements OnInit,OnDestroy {

  itemarray: any[];
  dataString: string;
  editid: any;
 name : any;
 value: number;

  // @Output() ev: EventEmitter<string> = new EventEmitter();
  val:boolean ;
  
  profileForm = new FormGroup({
    firstname: new FormControl('',[Validators.required, Validators.pattern(/^[a-z]+/i)]), 
    lastname: new FormControl('',[Validators.required, Validators.pattern(/^[a-z]+/i)]),
    mobile: new FormControl('',[Validators.required, Validators.pattern(/^[0-9]{10}\b/)]),
    gender: new FormControl('male'),
    email: new FormControl('',[Validators.required, Validators.pattern(/^([a-z]+)[\.]?\w+@[a-z]+\.[a-z]{2,3}\b/)]),
    password:new FormControl('',[Validators.required, Validators.pattern(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*-+]).{6,20})/)]),
    cnpassword:new FormControl('', Validators.required),
    address: new FormControl('', Validators.required)
  }, customValidation.MatchPassword)

  constructor(private localstore:LocalstorageService, 
    private submitservice:SubmitserviceService ,
    private router: Router,
    private activeroute: ActivatedRoute) {
      this.itemarray = [];
      console.log(this.itemarray);
     }
    
    
  ngOnInit() {
    this.itemarray = this.localstore.get();
    if(this.itemarray == null) {
      this.itemarray =[];
    }
    this.activeroute.params.subscribe( params => {
      this.editid = params['id'];
      console.log(this.editid );
      if(this.editid >= 0){
        console.log(this.editid );
          this.profileForm.patchValue({
          firstname: this.itemarray[this.editid].firstname,
          lastname :this.itemarray[this.editid].lastname,
          mobile: this.itemarray[this.editid].mobile,
          email    : this.itemarray[this.editid].email,
          gender   : this.itemarray[this.editid].gender,
          address  : this.itemarray[this.editid].address,
          password : this.itemarray[this.editid].password,
          cnpassword  : this.itemarray[this.editid].cnpassword 
        });    
      }
    });

    console.log(this.itemarray);
    // this.editid = this.submitservice.data;
    
  }
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  let pass = group.controls.password.value;
  let confirmPass = group.controls.cnpassword.value;
  // console.log(pass,confirmPass);
  return pass === confirmPass ? true : { notSame: false };
}

onSubmit(){
  if(this.editid>=0){
    this.itemarray[this.editid] = this.profileForm.value;
        this.localstore.set(this.itemarray);
      } 
      else{
        console.log( this.profileForm.value);
        this.itemarray.push(this.profileForm.value);
        this.localstore.set(this.itemarray);
      }
     
    
      this.router.navigate(['table']);
  }

//   sendMessage(): void {
//     console.log("entered");
//     // send message to subscribers via observable subject
//     this.submitservice.sendMessage('Message from Home Component to App Component!');
// }

// clearMessage(): void {
//     // clear message
//     this.submitservice.clearMessage();
// }
ngOnDestroy() {
this.editid.unsubscribe();
}

  }
  

