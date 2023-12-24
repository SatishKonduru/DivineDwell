import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminModule } from './modules/admin/admin.module';
import { HttpClientModule, withFetch } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, PB_DIRECTION} from 'ngx-ui-loader';



const ngxUiLoaderConfig : NgxUiLoaderConfig = {
  text: 'Loading...',
  textColor: 'orange',
  textPosition: 'center-center',
  pbColor: 'orange',
  bgsColor: 'orange',
  fgsColor: 'orange',
  fgsType: SPINNER.foldingCube,
  fgsSize: 100,
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness: 5
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
    
  ],
  providers: [
    provideClientHydration(),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
