import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ArmadaService } from '../services/armada.service';
import { Armada } from '../models/armada.model';
import { ArmadaMapper } from './armada.mapper';

@Injectable({
  providedIn: 'root'
})
export class ArmadaRepository {
  constructor(private service: ArmadaService) {}

  getArmadas(): Observable<Armada[]> {
    return this.service.getArmadas().pipe(
      map(dtos => ArmadaMapper.toModelList(dtos))
    );
  }
}
