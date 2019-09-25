import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { ApiService } from './api.service';
import { Mission } from '../models/mission.model';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommercialService {
  connectedCommercial: User;
  postCommercial = new Subject<User>();
  missions: Mission[];
  postMission = new Subject<Mission[]>();

  constructor(
    private apiService: ApiService
  ) { }

  async emitMission() {
    this.postMission.next(this.missions);
  }
  emitCommercial() {
    this.postCommercial.next(this.connectedCommercial);
  }

  newMission() {
    /**
     * @Todo Create a new mission
     */
  }

  deleteMission() {
    /**
     * @Todo Delete mission
     */
  }

  getMissions() {
    this.apiService.getMissionsCommercial(this.connectedCommercial.id).subscribe(
      (res) => {
        this.missions = res;
        this.emitMission();
      }, (err) => {
        console.log(err);
      }
    );
    console.log('get mission has return', this.missions);
  }
}
