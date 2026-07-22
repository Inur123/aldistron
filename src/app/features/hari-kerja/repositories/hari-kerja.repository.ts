import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HariKerjaService } from '../services/hari-kerja.service';
import { HariKerja } from '../models/hari-kerja.model';
import { HariKerjaMapper } from './hari-kerja.mapper';

@Injectable({
  providedIn: 'root'
})
export class HariKerjaRepository {
  constructor(private service: HariKerjaService) {}

  getHariKerjas(): Observable<HariKerja[]> {
    return this.service.getHariKerjas().pipe(
      map(dtos => HariKerjaMapper.toModelList(dtos))
    );
  }
}
