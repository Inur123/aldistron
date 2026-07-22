import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { KunjunganTagihNoRuteService } from '../services/kunjungan-tagih-no-rute.service';
import { KunjunganTagihNoRute } from '../models/kunjungan-tagih-no-rute.model';
import { KunjunganTagihNoRuteMapper } from './kunjungan-tagih-no-rute.mapper';

@Injectable({
  providedIn: 'root'
})
export class KunjunganTagihNoRuteRepository {
  constructor(private service: KunjunganTagihNoRuteService) {}

  getKunjunganTagihNoRutes(): Observable<KunjunganTagihNoRute[]> {
    return this.service.getKunjunganTagihNoRutes().pipe(
      map(dtos => KunjunganTagihNoRuteMapper.toModelList(dtos))
    );
  }
}
