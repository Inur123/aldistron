import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { KlaimBiayaService } from '../services/klaim-biaya.service';
import { KlaimBiaya } from '../models/klaim-biaya.model';
import { KlaimBiayaMapper } from './klaim-biaya.mapper';

@Injectable({
  providedIn: 'root'
})
export class KlaimBiayaRepository {
  constructor(private service: KlaimBiayaService) {}

  getKlaimBiayas(): Observable<KlaimBiaya[]> {
    return this.service.getKlaimBiayas().pipe(
      map(dtos => KlaimBiayaMapper.toModelList(dtos))
    );
  }
}
