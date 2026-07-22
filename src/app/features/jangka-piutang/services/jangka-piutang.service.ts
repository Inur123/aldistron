import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JangkaPiutangDto } from '../models/jangka-piutang.dto';

@Injectable({
  providedIn: 'root'
})
export class JangkaPiutangService {
  getJangkaPiutangs(): Observable<JangkaPiutangDto[]> {
    return of([
      {
        id: 1,
        id_aoldatabase: 101,
        id_aoldb: 1,
        id_aolterm: 'TERM-30',
        nama_jangkapiutang: '30 Hari Net',
        hari_jangkapiutang: 30,
        suspended_aol: false,
        created_at: '2026-07-22T08:00:00Z'
      }
    ]);
  }
}
