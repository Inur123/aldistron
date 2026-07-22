import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { KunjunganSetorService } from '../services/kunjungan-setor.service';
import { KunjunganSetor } from '../models/kunjungan-setor.model';
import { KunjunganSetorMapper } from './kunjungan-setor.mapper';

@Injectable({
  providedIn: 'root'
})
export class KunjunganSetorRepository {
  constructor(private service: KunjunganSetorService) {}

  getKunjunganSetors(): Observable<KunjunganSetor[]> {
    return this.service.getKunjunganSetors().pipe(
      map(dtos => KunjunganSetorMapper.toModelList(dtos))
    );
  }
}
