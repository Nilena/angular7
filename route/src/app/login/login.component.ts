import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formdata;

  constructor( private route: Router) { }

  ngOnInit() {
    this.formdata = new FormGroup({
      username: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])), 
      password: new FormControl("",this.passwordvalidation)
       });
  }
  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
       return {"passwd" : true};
    }
 }
 onClickSubmit(data) {
  console.log(data.username);
  if (data.username=="systemadmin" && data.password=="admin123") {
     alert("Login Successful");
     this.route.navigate(['app-home'])
  } else {
     alert("Invalid Login");
     return false;
  }
}
    
     

  }



