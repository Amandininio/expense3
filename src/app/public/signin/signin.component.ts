import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { User } from 'src/app/shared/models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Authentification } from 'src/app/shared/models/authentification.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signInForm: FormGroup;
  errorMessage = '';
  infoAuth: Authentification = {
    email: null,
    mdp: null
  };

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
    ) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signInForm = this.formBuilder.group({
      email: ['patoune@gmail.fr', [Validators.required, Validators.email]],
      password: ['patoche', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  // XXX no type
  onSubmit() {
    this.infoAuth.email = this.signInForm.get('email').value;
    this.infoAuth.mdp = this.signInForm.get('password').value;
   // console.log(this.infoAuth);

    this.authService.signInUser(this.infoAuth);
    this.errorMessage = this.authService.errorMessage;

  }

  onClick() {
  }

}
