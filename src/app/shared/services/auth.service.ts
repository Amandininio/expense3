import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { ApiService } from './api.service';
import { Authentification } from '../models/authentification.model';
import { Router } from '@angular/router';
import { CommercialService } from './commercial.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User ;
  errorMessage = '';
  constructor(
    private apiService: ApiService,
    private route: Router,
    private commercialService: CommercialService,
  ) { }

  signInUser(authentification: Authentification) {
    this.apiService.signinUser(authentification).subscribe(
      (res ) => {
        this.commercialService.connectedCommercial = res;
        console.log(this.commercialService.connectedCommercial);
        this.openPath();
      },
      (err) => {
        //  console.log('erreur', err);
        this.errorMessage = 'L\'email et/ou le mot de passe ne correspondent pas';
      }
    );
  }
  openPath() {
    if (this.commercialService.connectedCommercial.type === 'commercial') {
      this.route.navigate(['/commerciaux']);
    } else if (this.commercialService.connectedCommercial.type === 'comptable') {
      this.route.navigate(['/comptable']);
    }
  }
  updateUser() {
    /**
     * @Todo Http Put Update
     */
  }
  signOutUser() {
    /**
     * @Todo SignOut
     */
  }


}
