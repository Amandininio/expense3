import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';


export const routesPublic: Routes = [
  {path: 'in', component: SigninComponent},
  {path: 'up', component: SignupComponent},
  {path: '', redirectTo: 'in', pathMatch: 'full'},
  {path: '**', redirectTo: 'in' },

];

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    RouterModule.forChild(routesPublic),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PublicModule { }
