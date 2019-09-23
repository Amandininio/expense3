import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { ApiService } from './api.service';
import { Authentification } from '../models/authentification.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User ;
  errorMessage = '';
  constructor(
    private apiService: ApiService,
    private route: Router
  ) { }

  signInUser(authentification: Authentification) {
    this.apiService.signinUser(authentification).subscribe(
      (res ) => {
        this.user = res;
        this.openPath();
      },
      (err) => {
        //  console.log('erreur', err);
        this.errorMessage = 'L\'email et/ou le mot de passe ne correspondent pas';
      }
    );
  }
  openPath() {
    if (this.user.type === 'commercial') {
      this.route.navigate(['/commerciaux']);
    } else if (this.user.type === 'comptable') {
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
