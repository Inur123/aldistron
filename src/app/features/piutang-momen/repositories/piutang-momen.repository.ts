import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PiutangMomenService } from '../services/piutang-momen.service';
import { PiutangMomen } from '../models/piutang-momen.model';
import { PiutangMomenMapper } from './piutang-momen.mapper';

@Injectable({
  providedIn: 'root'
})
export class PiutangMomenRepository {
  constructor(private service: PiutangMomenService) {}

  getPiutangMomens(): Observable<PiutangMomen[]> {
    return this.service.getPiutangMomens().pipe(
      map(dtos => PiutangMomenMapper.toModelList(dtos))
    );
  }
}
