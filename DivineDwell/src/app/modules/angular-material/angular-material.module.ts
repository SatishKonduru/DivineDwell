import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';


const materialComponents = [
  MatMenuModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatInputModule
]
@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})
export class AngularMaterialModule { }
