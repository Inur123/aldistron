import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { KunjunganTagihRinciService } from '../services/kunjungan-tagih-rinci.service';
import { KunjunganTagihRinci } from '../models/kunjungan-tagih-rinci.model';
import { KunjunganTagihRinciMapper } from './kunjungan-tagih-rinci.mapper';

@Injectable({
  providedIn: 'root'
})
export class KunjunganTagihRinciRepository {
  constructor(private service: KunjunganTagihRinciService) {}

  getKunjunganTagihRincis(): Observable<KunjunganTagihRinci[]> {
    return this.service.getKunjunganTagihRincis().pipe(
      map(dtos => KunjunganTagihRinciMapper.toModelList(dtos))
    );
  }
}
