import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { AboutComponent } from './views/about/about.component';
import { ClientsComponent } from './views/clients/clients.component';
import { TasksComponent } from './views/tasks/tasks.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'tasks',component:TasksComponent},
  {path:'sing-up', component:SignUpComponent},
  {path:'about', component:AboutComponent},
  {path:'clients', component:ClientsComponent},
  {path:'**',component:HomeComponent}
];



@NgModule({
  declarations: [
  ],
  
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports:[ RouterModule ]
})
export class AppRoutingModuleModule { }
