import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { KunjunganService } from '../services/kunjungan.service';
import { Kunjungan } from '../models/kunjungan.model';
import { KunjunganMapper } from './kunjungan.mapper';

@Injectable({
  providedIn: 'root'
})
export class KunjunganRepository {
  constructor(private service: KunjunganService) {}

  getKunjungans(): Observable<Kunjungan[]> {
    return this.service.getKunjungans().pipe(
      map(dtos => KunjunganMapper.toModelList(dtos))
    );
  }
}
