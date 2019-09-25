import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { EmailValidator } from '@angular/forms';
import { Authentification } from '../models/authentification.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = 'http://localhost:8888/expense/expenseManager-vonSmarties/php';
  // api/commercial';

  constructor(
    private httpClient: HttpClient,
  ) { }

  signinUser(infoAuth: Authentification): Observable<any> {
    // const request = this.httpClient.get(`${this.PHP_API_SERVER}/api/connect.php?email=${email}`);
    return this.httpClient.post(`${this.PHP_API_SERVER}/api/connect.php`, infoAuth
    );
  }
  // @XXX change any for User
  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.PHP_API_SERVER}/api/create.php`, user);
  }

  // @XXX change any for User
  updateUser(user: any) {
    return this.httpClient.put<any>(`${this.PHP_API_SERVER}/api/update.php`, user);
  }

  // @XXX change any for User
  deleteUser(id: number) {
    return this.httpClient.delete<any>(`${this.PHP_API_SERVER}/api/delete.php/?id=${id}`);
  }

  getMissionsCommercial(userId: number): Observable<any> {
    return this.httpClient.get(`${this.PHP_API_SERVER}/api/readMissionsCommercial.php?id=${userId}`);
  }
}
