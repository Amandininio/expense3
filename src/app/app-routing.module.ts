import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './public/signin/signin.component';


const routes: Routes = [
  {path: '', redirectTo: 'signin', pathMatch: 'full' },
  {
    path: 'signin',
    component: SigninComponent
  },
  { path: 'commerciaux',
    loadChildren: 'src/app/commerciaux/commerciaux.module#CommerciauxModule'
  },
  { path: 'comptables',
    loadChildren: 'src/app/comptables/comptables.module#ComptablesModule'
  },
  {path: '**', redirectTo: 'signin' }
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
