import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { globalProperties } from '../../shared/globalProperties';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{
  loginForm: any = FormGroup
  constructor(private _router: Router){}
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.pattern(globalProperties.emailRegx)]),
      password: new FormControl('',[Validators.required])
    })
  }

  userLogin(){
   this._router.navigate(['/admin/dashboard'])
    console.log('User Login Details: ', this.loginForm.value)
  
  }


}
