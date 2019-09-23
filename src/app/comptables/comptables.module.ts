import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientsComponent } from './clients/clients.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { Routes, RouterModule } from '@angular/router';


export const routesComptables: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'clients', component: ClientsComponent},
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: '**', redirectTo: 'accueil' },

];

@NgModule({
  declarations: [
    AccueilComponent,
    ClientsComponent,
    StatistiquesComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule.forChild(routesComptables)
  ]
})
export class ComptablesModule { }
