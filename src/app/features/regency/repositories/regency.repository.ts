import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RegencyService } from '../services/regency.service';
import { Regency } from '../models/regency.model';
import { RegencyMapper } from './regency.mapper';

@Injectable({
  providedIn: 'root'
})
export class RegencyRepository {
  constructor(private service: RegencyService) {}

  getRegencys(): Observable<Regency[]> {
    return this.service.getRegencys().pipe(
      map(dtos => RegencyMapper.toModelList(dtos))
    );
  }
}
