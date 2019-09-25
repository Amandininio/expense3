import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { CommercialService } from 'src/app/shared/services/commercial.service';
import { Subscription } from 'rxjs';
import { Mission } from 'src/app/shared/models/mission.model';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit, OnDestroy {
  missionSubscription: Subscription;
  missions: Mission[];
  constructor(
    private commercialService: CommercialService,
  ) {}

  ngOnInit() {
    this.commercialService.getMissions();
    this.commercialService.postMission.subscribe(
      (mission: Mission[]) => {
        this.missions = mission;
        console.log('accueil Mission', this.missions);
      }
    );
    this.commercialService.emitMission();
  }

  ngOnDestroy() {
    this.missionSubscription.unsubscribe();
  }

  // When you wanna fix stuff without thinking of the main problem
  // valseuse() {
  //   if (Array.isArray( this.missions)){
  //     return true;
  //   } else {
  //     return false ;
  //   }
  // }


}
