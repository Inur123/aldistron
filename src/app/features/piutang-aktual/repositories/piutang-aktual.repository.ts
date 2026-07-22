import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PiutangAktualService } from '../services/piutang-aktual.service';
import { PiutangAktual } from '../models/piutang-aktual.model';
import { PiutangAktualMapper } from './piutang-aktual.mapper';

@Injectable({
  providedIn: 'root'
})
export class PiutangAktualRepository {
  constructor(private service: PiutangAktualService) {}

  getPiutangAktuals(): Observable<PiutangAktual[]> {
    return this.service.getPiutangAktuals().pipe(
      map(dtos => PiutangAktualMapper.toModelList(dtos))
    );
  }
}
