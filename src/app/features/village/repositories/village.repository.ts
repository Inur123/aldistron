import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { VillageService } from '../services/village.service';
import { Village } from '../models/village.model';
import { VillageMapper } from './village.mapper';

@Injectable({
  providedIn: 'root'
})
export class VillageRepository {
  constructor(private service: VillageService) {}

  getVillages(): Observable<Village[]> {
    return this.service.getVillages().pipe(
      map(dtos => VillageMapper.toModelList(dtos))
    );
  }
}
