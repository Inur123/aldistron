import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PlafonBiayaService } from '../services/plafon-biaya.service';
import { PlafonBiaya } from '../models/plafon-biaya.model';
import { PlafonBiayaMapper } from './plafon-biaya.mapper';

@Injectable({
  providedIn: 'root'
})
export class PlafonBiayaRepository {
  constructor(private service: PlafonBiayaService) {}

  getPlafonBiayas(): Observable<PlafonBiaya[]> {
    return this.service.getPlafonBiayas().pipe(
      map(dtos => PlafonBiayaMapper.toModelList(dtos))
    );
  }
}
