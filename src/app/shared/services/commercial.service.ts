import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CommercialService {
  connectedCommercial: User;
  constructor() { }

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
    /**
     * @Todo get All mission
     */
  }
}
