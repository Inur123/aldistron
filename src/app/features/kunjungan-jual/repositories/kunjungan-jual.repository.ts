import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { KunjunganJualService } from '../services/kunjungan-jual.service';
import { KunjunganJual } from '../models/kunjungan-jual.model';
import { KunjunganJualMapper } from './kunjungan-jual.mapper';

@Injectable({
  providedIn: 'root'
})
export class KunjunganJualRepository {
  constructor(private service: KunjunganJualService) {}

  getKunjunganJuals(): Observable<KunjunganJual[]> {
    return this.service.getKunjunganJuals().pipe(
      map(dtos => KunjunganJualMapper.toModelList(dtos))
    );
  }
}
