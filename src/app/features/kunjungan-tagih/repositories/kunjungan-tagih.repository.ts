import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { KunjunganTagihService } from '../services/kunjungan-tagih.service';
import { KunjunganTagih } from '../models/kunjungan-tagih.model';
import { KunjunganTagihMapper } from './kunjungan-tagih.mapper';

@Injectable({
  providedIn: 'root'
})
export class KunjunganTagihRepository {
  constructor(private service: KunjunganTagihService) {}

  getKunjunganTagihs(): Observable<KunjunganTagih[]> {
    return this.service.getKunjunganTagihs().pipe(
      map(dtos => KunjunganTagihMapper.toModelList(dtos))
    );
  }
}
