import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ArmadaRinciService } from '../services/armada-rinci.service';
import { ArmadaRinci } from '../models/armada-rinci.model';
import { ArmadaRinciMapper } from './armada-rinci.mapper';

@Injectable({
  providedIn: 'root'
})
export class ArmadaRinciRepository {
  constructor(private service: ArmadaRinciService) {}

  getArmadaRincis(): Observable<ArmadaRinci[]> {
    return this.service.getArmadaRincis().pipe(
      map(dtos => ArmadaRinciMapper.toModelList(dtos))
    );
  }
}
