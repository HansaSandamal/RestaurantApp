import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginFormGroup : FormGroup;
  constructor(private formBuilder :FormBuilder,private router:Router) { 
    this.loginFormGroup = formBuilder.group({
      userName:[null,[Validators.required]],
      password:[null,Validators.required]
    });
  }

  ngOnInit(): void {

  }
  onLogin(){
    console.log(this.loginFormGroup.value);
    this.router.navigate(['home'])
  }

}
