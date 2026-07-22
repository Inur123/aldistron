import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PengirimanService } from '../services/pengiriman.service';
import { Pengiriman } from '../models/pengiriman.model';
import { PengirimanMapper } from './pengiriman.mapper';

@Injectable({
  providedIn: 'root'
})
export class PengirimanRepository {
  constructor(private service: PengirimanService) {}

  getPengirimans(): Observable<Pengiriman[]> {
    return this.service.getPengirimans().pipe(
      map(dtos => PengirimanMapper.toModelList(dtos))
    );
  }
}
