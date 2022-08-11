import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerFormGroup:FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.registerFormGroup=formBuilder.group({
        userName:[null,Validators.required],
        email:[null,[Validators.required,Validators.email]],
        password:[null,[Validators.required,Validators.minLength(8)]]
    });
   }

  ngOnInit(): void {
  }
  onRegister(){
    console.log(this.registerFormGroup.value.userName);
  }
}
