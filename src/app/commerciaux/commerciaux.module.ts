import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import { ClientsComponent } from './clients/clients.component';
import { CreateMissionComponent } from './create-mission/create-mission.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdateMissionComponent } from './update-mission/update-mission.component';
import { RouterModule, Routes } from '@angular/router';

export const routesCommerciaux: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'clients', component: ClientsComponent},
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: '**', redirectTo: 'accueil' },

];

@NgModule({
  declarations: [
    CreateMissionComponent,
    UpdateMissionComponent,
    AccueilComponent,
    ClientsComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule.forChild(routesCommerciaux),
    CommonModule
  ]
})
export class CommerciauxModule { }
