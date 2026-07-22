import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UnitService } from '../services/unit.service';
import { Unit } from '../models/unit.model';
import { UnitMapper } from './unit.mapper';

@Injectable({
  providedIn: 'root'
})
export class UnitRepository {
  constructor(private service: UnitService) {}

  getUnits(): Observable<Unit[]> {
    return this.service.getUnits().pipe(
      map(dtos => UnitMapper.toModelList(dtos))
    );
  }
}
