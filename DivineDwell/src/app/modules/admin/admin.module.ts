import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CustomSidenavComponent } from './custom-sidenav/custom-sidenav.component';
import { HomeComponent } from './home/home.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AdminComponent,
    CustomSidenavComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularMaterialModule
  ]
})
export class AdminModule { }
