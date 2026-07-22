import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PiutangPlafonService } from '../services/piutang-plafon.service';
import { PiutangPlafon } from '../models/piutang-plafon.model';
import { PiutangPlafonMapper } from './piutang-plafon.mapper';

@Injectable({
  providedIn: 'root'
})
export class PiutangPlafonRepository {
  constructor(private service: PiutangPlafonService) {}

  getPiutangPlafons(): Observable<PiutangPlafon[]> {
    return this.service.getPiutangPlafons().pipe(
      map(dtos => PiutangPlafonMapper.toModelList(dtos))
    );
  }
}
