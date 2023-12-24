import { Component, computed, signal } from '@angular/core';
import { Router } from '@angular/router';



export  type Menu =  {
  icon: string,
  label: string,
  route: string,
  role: string
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  collapsed = signal(false)
  sidenavWidth = computed(()=>  this.collapsed() ? '65px' : '250px')
  constructor(private _router: Router){}
  
  onExit(){
    this._router.navigate(['/login'])
  }
}
