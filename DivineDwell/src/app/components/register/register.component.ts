import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { globalProperties } from '../../shared/globalProperties';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  registerForm : any = FormGroup
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('',[Validators.required, Validators.pattern(globalProperties.nameRegx)]),
      password: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.pattern(globalProperties.emailRegx)]),
      contactNumber: new FormControl('',[Validators.required, Validators.pattern(globalProperties.contactNumberRegex)])
    })

    
  }
}
