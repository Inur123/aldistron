import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PengirimanRinciBarangService } from '../services/pengiriman-rinci-barang.service';
import { PengirimanRinciBarang } from '../models/pengiriman-rinci-barang.model';
import { PengirimanRinciBarangMapper } from './pengiriman-rinci-barang.mapper';

@Injectable({
  providedIn: 'root'
})
export class PengirimanRinciBarangRepository {
  constructor(private service: PengirimanRinciBarangService) {}

  getPengirimanRinciBarangs(): Observable<PengirimanRinciBarang[]> {
    return this.service.getPengirimanRinciBarangs().pipe(
      map(dtos => PengirimanRinciBarangMapper.toModelList(dtos))
    );
  }
}
