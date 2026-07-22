import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PelangganKategoriService } from '../services/pelanggan-kategori.service';
import { PelangganKategori } from '../models/pelanggan-kategori.model';
import { PelangganKategoriMapper } from './pelanggan-kategori.mapper';

@Injectable({
  providedIn: 'root'
})
export class PelangganKategoriRepository {
  constructor(private service: PelangganKategoriService) {}

  getPelangganKategoris(): Observable<PelangganKategori[]> {
    return this.service.getPelangganKategoris().pipe(
      map(dtos => PelangganKategoriMapper.toModelList(dtos))
    );
  }
}
