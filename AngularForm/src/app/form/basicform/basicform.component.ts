import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {  FormGroup, FormControl } from '@angular/forms';
// import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-basicform',
  templateUrl: './basicform.component.html',
  styleUrls: ['./basicform.component.css']
})
export class BasicformComponent implements OnInit {

  @Input()
  dataString:string;

  @Output() ev: EventEmitter<string> = new EventEmitter();

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
  })
  // profileForm = this.fb.group({

  //   firstname: ['', [Validators.required, Validators.pattern(/^[a-z]+/i)]],
  //   lastname: ['',[Validators.required, Validators.pattern(/^[a-z]+/i)]],
  //   mobile: ['',[Validators.required, Validators.pattern(/^[0-9]{10}\b/)]],
  //   gender:['male'],
  //   email:['',[Validators.required, Validators.pattern(/^([a-z]+)[\.]?\w+@[a-z]+\.[a-z]{2,3}\b/)]],
  //   password:['',[Validators.required, Validators.pattern(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*-+]).{6,20})/)]],
  //   cnpassword:['', Validators.required],
  //   address: ['', Validators.required]

  // }, 
  // { v: this.checkPasswords });

  constructor( ) { }

  ngOnInit() {

  }
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  let pass = group.controls.password.value;
  let confirmPass = group.controls.cnpassword.value;
  // console.log(pass,confirmPass);
 
  return pass === confirmPass ? true : { notSame: false };
  // console.log(pass === confirmPass ? true : { notSame: false } );
  // console.log(pass,confirmPass);
}

onSubmit(){
  // console.warn(this.profileForm); 
  // console.warn(this.profileForm.value); 
  // console.warn(this.profileForm.valid); 
  console.log(this.dataString);
  this.ev.emit(this.profileForm.value);
  }
  
}
