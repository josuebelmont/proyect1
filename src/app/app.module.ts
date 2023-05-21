import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { ClientsComponent } from './views/clients/clients.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModuleModule } from './app-routing-module.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SignUpComponent,
    FormComponent,
    ClientsComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModuleModule,
    FormsModule,
    HttpClientModule


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
